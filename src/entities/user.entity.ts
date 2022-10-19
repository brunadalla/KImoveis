import { Exclude } from "class-transformer"
import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, OneToMany } from "typeorm"
import { Schedules } from "./schedules_user_properties.entity"

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  name: string

  @Column({ unique: true })
  email: string
  
  @Column()
  isAdm: boolean
  
  @Column({ default: true })
  isActive: boolean
  
  @Column()
  @Exclude()
  password: string

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date

  @OneToMany(() => Schedules, schedules => schedules.user)
  schedules: Schedules[]
}

export { User }
