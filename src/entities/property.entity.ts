import { Column, CreateDateColumn, Entity, IsNull, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Address } from "./address.entity"

@Entity("properties")
class Property {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ default: false })
  sold: boolean

  @Column("decimal", { precision: 12, scale: 2, nullable: false })
  value: number

  @Column("integer", { nullable: false })
  size: number

  @CreateDateColumn({ name: "created_at", nullable: false })
  createdAt: Date

  @UpdateDateColumn({ name: "updated_at", nullable: false })
  updatedAt: Date

  @OneToOne(() => Address, (address) => address.id, {
    eager: true,
    nullable: false
  }) @JoinColumn()
  addressId: Address
}

export { Property }
