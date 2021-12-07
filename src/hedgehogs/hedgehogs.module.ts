import { Module } from '@nestjs/common';
import { HedgehogsService } from './hedgehogs.service';
import { HedgehogsController } from './hedgehogs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hedgehog } from './entities/hedgehog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hedgehog])],
  controllers: [HedgehogsController],
  providers: [HedgehogsService],
})
export class HedgehogsModule {}
