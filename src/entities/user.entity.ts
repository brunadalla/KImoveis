import { Exclude } from "class-transformer"
import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column } from "typeorm"

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
}

export { User }
