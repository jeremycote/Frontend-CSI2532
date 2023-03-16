import sql from '@/src/lib/db';
import EmployeeDashboardStats from '@/src/types/EmployeeDashboardStats';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<EmployeeDashboardStats>,
) {
  const session = await getServerSession(req, res, authOptions);

  if (session?.user?.email != null) {
    const statRows = await sql<EmployeeDashboardStats[]>`
        SELECT lAgg.*, rAgg.reservations FROM (
            SELECT COUNT(l) AS leases, e.employee_id  FROM leases as l, employees AS e
            WHERE e.employee_id IN (SELECT user_id FROM users WHERE email = '${session?.user?.email}')
            AND (l.employee_id = e.employee_id) GROUP BY e.employee_id) AS lAgg
        JOIN (
            SELECT COUNT(r) as reservations, e.employee_id  FROM reservations as r, employees AS e
            WHERE e.employee_id IN (SELECT user_id FROM users WHERE email = '${session?.user?.email}')
            AND r.room_id IN (SELECT room_id FROM rooms WHERE hotel_id = e.hotel_id)
            AND r.reservation_id NOT IN (SELECT reservation_id FROM leases) GROUP BY e.employee_id) AS rAgg
        ON lAgg.employee_id = rAgg.employee_id;
    `;

    if (statRows != null && statRows.length) {
      res.status(200).json(statRows[0]);
    } else {
      res.status(401);
    }
  } else {
    res.status(401);
  }

  res.end();
}
