import { useForm } from 'react-hook-form';
import useRouter from 'next/router';
import * as z from 'zod';
import { userSchema } from '@/app/api/user/route';
import { Field } from 'shadcn/ui';

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  const router = useRouter();

  const onSubmit = async (values: any) => {
    const response = await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      router.push('/sign-in');
    } else {
      console.error('Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field 
        as='input'
        innerRef={register} 
        placeholder='Username' 
        name='username' 
      />
      <Field 
        as='input'
        innerRef={register} 
        placeholder='Email Address' 
        name='email' 
      />
      <Field 
        as='input'
        innerRef={register} 
        type='password' 
        placeholder='Password' 
        name='password' 
      />
      <Field 
        as='input'
        innerRef={register} 
        type='password' 
        placeholder='Confirm Password' 
        name='confirmPassword' 
      />
      <Field 
        as='button' 
        type='submit'
      >
        Sign Up
      </Field>
    </form>
  );
};

export default SignUpForm;
function zodResolver(userSchema: z.ZodEffects<z.ZodObject<{ username: z.ZodString; email: z.ZodString; password: z.ZodString; confirmPassword: z.ZodString; }, "strip", z.ZodTypeAny, { username: string; email: string; password: string; confirmPassword: string; }, { username: string; email: string; password: string; confirmPassword: string; }>, { username: string; email: string; password: string; confirmPassword: string; }, { username: string; email: string; password: string; confirmPassword: string; }>): import("react-hook-form").Resolver<{ username: string; email: string; password: string; confirmPassword: string; }, any> | undefined {
  throw new Error('Function not implemented.');
}
