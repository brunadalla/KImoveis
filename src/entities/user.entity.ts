import { Exclude } from "class-transformer"
import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column } from "typeorm"

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ nullable: false })
  name: string

  @Column({ unique: true, nullable: false })
  email: string
  
  @Column({ nullable: false })
  isAdm: boolean
  
  @Column({ default: true, nullable: false })
  isActive: boolean
  
  @Column({ nullable: false })
  @Exclude()
  password: string

  @CreateDateColumn({ name: "created_at", nullable: false })
  createdAt: Date

  @UpdateDateColumn({ name: "updated_at", nullable: false })
  updatedAt: Date
}

export { User }
