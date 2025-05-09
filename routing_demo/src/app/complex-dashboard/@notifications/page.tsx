import { Card } from '@/components/card'
import Link from 'next/link'
import React from 'react'

export default function Notifications() {
  return (
    <Card>
        <div>Notifications</div>
        <div>
            <Link href={"/complex-dashboard/archived"}>Archived</Link>
        </div>
    </Card>
  )
}
