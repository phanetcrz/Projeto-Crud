import { SetMetadata } from '@nestjs/common';

export const EmailUsuario = (...args: string[]) => SetMetadata('email-usuario', args);
