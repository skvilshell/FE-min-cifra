import { cn } from '@/shared'
import s from './section-card.module.css'
import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface SectionCardProps {
   title: string | null
   descripton: ReactNode | null
   link: string
}

export function SectionCard({
   title,
   descripton,
   link
}: SectionCardProps) {
   return (
      <div className={cn([s.root])}>
         <Link
            to={link}
            className={s.link}
         >
            <div className={s.content}>
               <h2 className={cn(["heading-2"])}>{title}</h2>
               <div>
                  {descripton}
               </div>
            </div>
         </Link>
      </div>
   )
}