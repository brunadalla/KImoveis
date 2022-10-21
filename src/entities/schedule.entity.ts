import { CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

import { Property } from "./property.entity"
import { User } from "./user.entity"

@Entity("schedules_user_properties")
class Schedule {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @CreateDateColumn()
  date: Date

  @CreateDateColumn({ type: "time" })
  hour: Date

  @ManyToOne(() => User, { eager: true })
  user: User

  @ManyToOne(() => Property)
  property: Property
}

export { Schedule }
