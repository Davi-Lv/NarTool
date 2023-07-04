import { Body, Controller, Delete, Get, Post, Put, Query } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";
import { Usuario } from "./usuario.entity";
import { resultadoDto } from "src/dto/resultado.dto";

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly UsuarioService: UsuarioService) { }

  @Get('listar')
  async findAll(): Promise<Usuario[]> {
    return this.UsuarioService.findAll();
  }

  @Post('cadastro')
  async cadastrar(@Body() usuario: Usuario): Promise<Usuario> {
    return this.UsuarioService.cadastrar(usuario);
  }

  @Post('login')
  async login(@Body() credentials: { email: string; senha: string }): Promise<{ success: boolean }> {
    const isValid = await this.UsuarioService.login(credentials.email, credentials.senha);
    return { success: isValid };
  }

  @Get('check-email')
  async checkEmail(@Query('email') email: string): Promise<{ exists: boolean }> {
    const exists = await this.UsuarioService.checkEmailExists(email);
    return { exists };
  }
}