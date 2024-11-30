import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EvenT } from "./Event";


@Entity('coupon')
export class Coupon {
  @PrimaryGeneratedColumn()
  private id!: number;
  @Column()
  private code!: string;
  @Column()
  private discount!: string;
  @Column()
  private valid!: Date;

  @ManyToOne(() => EvenT, (event) => event)
  @JoinColumn({ name: 'event_id' })
  private event!: EvenT;
}