import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async create(createUserDto): Promise<any> {
    const isExist = await this.userRepository.findOne({
      userId: createUserDto.userId,
    });
    if (isExist) {
      throw new ForbiddenException({
        message: [`이미 등록된 사용자입니다.`],
      });
    } else {
      const { password, ...result } = await this.userRepository.save(
        createUserDto,
      );
    }
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
