import {Controller, Get, Post, Body} from '@nestjs/common';
import {Put, Param, Delete, HttpCode} from '@nestjs/common';
import {ApiTags, ApiOperation, ApiResponse} from '@nestjs/swagger';
import {ApiBearerAuth, ApiBody, ApiParam} from '@nestjs/swagger';
import {CreateVehicleDto} from './CreateVehicleDto';

@ApiTags('测试接口')
@ApiBearerAuth('Authorization')
@Controller()
export class AppController {
    @Get("")
    @ApiOperation({summary: ''})
    local(): Object {
        return {code: 200, msg: '成功', result: 111};
    }

    @Get("/index")
    @ApiOperation({summary: 'index'})
    index(): Object {
        return {code: 200, msg: '成功/index', result: 111};
    }
}
