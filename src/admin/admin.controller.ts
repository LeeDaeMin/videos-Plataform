import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import {admin as AdminModel} from '@prisma/client';



@Controller('admin')
export class AdminController {
  constructor(private readonly AdminService: AdminService) {}

  @Get('all')
  async findAll(): Promise<AdminModel[]>{
    return this.AdminService.admins({});
  }


  @Get('/id/:id')
  async getAdmin(@Param('id') id: string): Promise<AdminModel>{
    return this.AdminService.admin({ id: Number(id) });
  }

  @Post('/createAdmin')
  async createAdmin(@Body() CreateAdminDto: CreateAdminDto): Promise<AdminModel>{
    return this.AdminService.newAdmin(CreateAdminDto);
  }
}
