import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("addresses")
class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ nullable: false })
  district: string

  @Column({ nullable: false })
  zipCode: string

  @Column({ nullable: false })
  number: string

  @Column({ nullable: false })
  city: string

  @Column({ nullable: false })
  state: string
}

export { Address }
