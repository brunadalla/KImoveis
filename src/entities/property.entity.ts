import { Column, CreateDateColumn, Entity, IsNull, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Address } from "./address.entity"
import { Schedules } from "./schedules_user_properties.entity"

@Entity("properties")
class Property {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ default: false })
  sold: boolean

  @Column("decimal", { precision: 12, scale: 2 })
  value: number

  @Column("integer")
  size: number

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date

  @OneToOne(() => Address, (address) => address.id, {
    eager: true,
    nullable: false
  }) @JoinColumn()
  address: Address

  @OneToMany(() => Schedules, schedules => schedules.property)
  schedules: Schedules[]
}

export { Property }
