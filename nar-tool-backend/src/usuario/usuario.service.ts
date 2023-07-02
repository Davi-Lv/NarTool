import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<Usuario>,
  ) { }

  async findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  async create(usuario: Usuario): Promise<Usuario> {
    return this.usuarioRepository.save(usuario);
  }

  async checkEmailExists(email: string): Promise<boolean> {
    const user = await this.usuarioRepository.findOne({ where: { email } });
    return !!user;
  }

  async login(email: string, senha: string): Promise<any> {
    const user = await this.usuarioRepository.findOne({ where: { email } });
  
    if (!user) {
      return false;
    }
  
    if (user.senha === senha) {
      return true /*{ id: user.id, nome: user.name, email: user.email}*/;
    } else {
      return false;
    }
  }
  
}
