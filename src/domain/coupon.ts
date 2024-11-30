import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EvenT } from "./Event";


@Entity('coupon')
export class Coupon {
  @PrimaryGeneratedColumn("uuid")
  private id!: number;

  @Column("varchar", { length: 100 })
  private code!: string;

  @Column("integer")
  private discount!: string;

  @Column("timestamp")
  private valid!: Date;

  @ManyToOne(() => EvenT, (event) => event)
  @JoinColumn({ name: 'event_id' })
  private event!: EvenT;
}