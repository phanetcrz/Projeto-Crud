import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
export declare class FormataFilter<T> implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost): void;
}
