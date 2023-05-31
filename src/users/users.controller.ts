import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { AuthService } from 'src/auth/auth.service';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CurrentUser } from 'src/common/decorators/user.decorator';
import { CreateUserDto, UpdateUserDto } from './dto/user.dtos';
import { RequestLoginDto } from 'src/auth/dto/request.login.dto';

@Controller('user')
@ApiTags('User')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @ApiOperation({ summary: '현재 user 가져오기' })
  @UseGuards(JwtAuthGuard)
  @Get()
  getCurrentUser(@CurrentUser() user:Object) {
    return user;
  }

  @ApiOperation({ summary: '회원가입' })
  @ApiBody({
    description: 'post signup',
    type: CreateUserDto,
  })
  @Post('signup')
  async sighUp(@Body() body: CreateUserDto) {
    return await this.usersService.signUp(body);
  }

  @ApiOperation({ summary: '회원 탈퇴' })
  @UseGuards(JwtAuthGuard)
  @ApiBody({
    description: 'user delete',
  })
  @Delete(':id')
  async deleteUser(@Param('id') id: string, @CurrentUser() User:Object) {
    return await this.usersService.deleteUser(id);
  }

  @ApiOperation({ summary: '유저 로그인' })
  @ApiBody({
    description: 'post login',
    type: RequestLoginDto,
  })
  @Post('login')
  logIn(@Body() data: RequestLoginDto) {
    return this.authService.jwtLogIn(data);
  }

  @ApiOperation({ summary: '유저 정보 조회'})
  @UseGuards(JwtAuthGuard)
  @ApiBody({
    description: 'get userInfo'
  })
  @Get(':id')
  async getUserInfo(@Param('id') id: string, @CurrentUser() User:Object) {
    return await this.usersService.getUserInfo(id)
  }

  @ApiOperation({ summary: '유저 정보 수정'})
  @UseGuards(JwtAuthGuard)
  @ApiBody({
    description: 'update userInfo'
  })
  @Patch(':id')
  async updateUserInfo(@Param('id') id: string, @Body() body: UpdateUserDto, @CurrentUser() User:Object){
    return await this.usersService.updateUserInfo(id, body)
  }
}
