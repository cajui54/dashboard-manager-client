'use client';
import { Button } from '@/components/ui/button';
import {
  SheetContent,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { X } from 'lucide-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createUserSchema, CreateUserSchema } from './constants/create-schema';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { createUser } from '@/app/_actions/create-user';
import { toast } from 'sonner';

const inputsDefault: CreateUserSchema = {
  fullName: '',
  email: '',
  phone: '',
  isWhats: false,
  cpf: '',
  rg: '',
  isActive: true,
};

const FormAddUser = () => {
  const form = useForm<CreateUserSchema>({
    resolver: zodResolver(createUserSchema),
    defaultValues: inputsDefault,
  });

  async function onSubmit(data: CreateUserSchema) {
    try {
      await createUser(data);

      toast.success('Usuário adicionado com sucesso!', {
        action: (
          <Button variant={'outline'} onClick={() => toast.dismiss()}>
            Fechar
          </Button>
        ),
      });
    } catch (error) {
      toast.error('Erro ao adicionar usuário!');
    } finally {
      form.reset();
    }
  }
  const isActive = form.watch('isActive');

  return (
    <SheetContent className="min-w-[560px] gap-10 overflow-y-auto overflow-x-hidden p-10">
      <div className="flex h-10 w-[480px] gap-x-2">
        <SheetTitle className="h-6 w-[432px] font-serif text-2xl font-normal tracking-tighter text-zinc-900">
          Adicionar usuário
        </SheetTitle>
        <SheetClose asChild>
          <Button
            variant={'outline'}
            className="h-10 w-10 rounded-full px-4 py-2"
            size={'icon'}
          >
            <X className="h-4 w-4 text-zinc-900" />
          </Button>
        </SheetClose>
      </div>
      <SheetDescription>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="mt-10 h-[500px] w-[480px] space-y-5">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="labelInput">Nome Completo</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Digite o nome"
                        {...field}
                        className="input"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="labelInput">E-mail</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Digite o e-mail"
                        {...field}
                        className="input"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div>
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="labelInput">Telefone</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="informe o telefone"
                          {...field}
                          className="input"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="isWhats"
                  render={({ field }) => (
                    <FormItem className="mt-2 flex cursor-pointer items-center gap-x-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={(value) => field.onChange(!!value)}
                          className="h-4 w-4 rounded-sm border border-teal-950"
                        />
                      </FormControl>
                      <FormLabel className="relative bottom-[6px] cursor-pointer text-sm font-medium tracking-tighter">
                        WhatsApp
                      </FormLabel>
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex h-[62px] w-[480px] gap-x-4">
                <FormField
                  control={form.control}
                  name="cpf"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="labelInput !w-[232px]">
                        CPF
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Informe o CPF"
                          {...field}
                          maxLength={11}
                          className="input !w-[232px]"
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="rg"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="labelInput !w-[232px]">
                        RG
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Informe o RG"
                          {...field}
                          maxLength={9}
                          className="input !w-[232px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="labelInput">E-mail</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Digite o e-mail"
                        type="email"
                        {...field}
                        className="input"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="mt-1 flex h-[66px] w-full items-center justify-between rounded-sm border border-zinc-200 bg-zinc-50 p-4 font-sans">
                <div className="h-[34px] w-[347px] space-y-2">
                  <h3 className="h-[14px] w-[347px] text-sm font-medium tracking-tighter text-zinc-950">
                    Status
                  </h3>
                  <p className="h-3 w-[269px] text-xs tracking-tighter text-zinc-500">
                    Defina se o usuário estará ativo ao ser adicionado.
                  </p>
                </div>

                <FormField
                  control={form.control}
                  name="isActive"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={(value) => field.onChange(!!value)}
                          className="hidden"
                        />
                      </FormControl>
                      <FormLabel className="flex h-6 w-[85px] cursor-pointer items-center justify-between gap-2">
                        <div className="relative h-6 w-11 rounded-full border-2 border-transparent bg-teal-950 px-[2px]">
                          <div
                            className={`${isActive ? 'right-0' : 'left-0'} absolute h-5 w-5 rounded-full bg-white p-[10px] shadow-lg`}
                          ></div>
                        </div>

                        <span className="h-[19px] w-[33px] text-sm font-medium text-zinc-900">
                          {isActive ? 'Ativo' : 'Inativo'}
                        </span>
                      </FormLabel>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="mt-[292px] flex h-10 w-[480px] items-center justify-end gap-x-3">
              <SheetClose asChild>
                <Button
                  type="reset"
                  className="h-10 w-[89px] rounded-full border border-zinc-200 bg-white px-4 py-2"
                  variant={'outline'}
                  onClick={() => {
                    form.reset();
                  }}
                >
                  Cancelar
                </Button>
              </SheetClose>
              <Button
                disabled={form.formState.isSubmitting}
                variant={'default'}
                className="borde h-10 w-[93px] rounded-full px-4 py-2"
                type="submit"
              >
                Adicionar
              </Button>
            </div>
          </form>
        </Form>
      </SheetDescription>
    </SheetContent>
  );
};

export default FormAddUser;
