import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { Repository } from 'typeorm';
import { CreateHedgehogDto } from './dto/create-hedgehog.dto';
import { UpdateHedgehogDto } from './dto/update-hedgehog.dto';
import { Hedgehog } from './entities/hedgehog.entity';

@Injectable()
export class HedgehogsService {
  constructor(@InjectRepository(Hedgehog) private readonly hedgehogRepository: Repository<Hedgehog>) {}
  create(createHedgehogDto: CreateHedgehogDto) {
    try {
      const newHedgehog = this.hedgehogRepository.create(createHedgehogDto);
      return this.hedgehogRepository.save(newHedgehog);
    } catch (err) {
      throw new InternalServerErrorException('Oops, something went wrong');
    }
  }

  findAll(paginationQuery: PaginationQueryDto) {
    const { limit, offset } = paginationQuery;
    let hedgehogs;
    try {
      hedgehogs = this.hedgehogRepository.find({
        skip: offset,
        take: limit,
      });
    } catch (err) {
      throw new InternalServerErrorException('Oops, something went wrong');
    }
    return hedgehogs;
  }

  findOne(id: string) {
    let hedgehog;
    try {
      hedgehog = this.hedgehogRepository.find({ where: { id } });
    } catch (err) {
      throw new InternalServerErrorException('Oops, something went wrong');
    }

    return hedgehog;
  }

  update(id: number, updateHedgehogDto: UpdateHedgehogDto) {
    return `This action updates a #${id} hedgehog`;
  }

  remove(id: number) {
    return `This action removes a #${id} hedgehog`;
  }
}
