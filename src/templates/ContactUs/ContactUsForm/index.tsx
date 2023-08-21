import * as S from './styles';
import { Button } from '../../../components/Button';
import { Theme } from '../../../styles/Theme';
import { useForm, type SubmitHandler } from 'react-hook-form';

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactUsForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = () => {
    reset({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <S.ContactUsFormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div id="name">
          <input
            type="text"
            placeholder="Your Name"
            {...register('name', { required: true, minLength: 2 })}
          />
          {errors.name && (
            <p>
              É preciso preencher o campo <strong>Your Name</strong>.
            </p>
          )}
        </div>

        <div id="email">
          <input
            type="text"
            placeholder="Your Email"
            {...register('email', { required: true, minLength: 2 })}
          />
          {errors.email && (
            <p>
              É preciso preencher o campo <strong>Your Email</strong>.
            </p>
          )}
        </div>

        <div id="subject">
          <input
            type="text"
            placeholder="Subject"
            {...register('subject', { required: true, minLength: 2 })}
          />
          {errors.subject && (
            <p>
              É preciso preencher o campo <strong>Subject</strong>.
            </p>
          )}
        </div>

        <div id="message">
          <textarea
            placeholder="Message"
            rows={5}
            {...register('message', { required: true, minLength: 2 })}
          ></textarea>
          {errors.message && (
            <p>
              É preciso preencher o campo <strong>Message</strong>.
            </p>
          )}
        </div>

        <S.ContactUsFormButton>
          <Button
            border={Theme.colors.orangeColor}
            background={Theme.colors.orangeColor}
            color={Theme.colors.lightColor}
            bgHover={Theme.colors.orangeColorHover}
            colorHover={Theme.colors.lightColor}
          >
            Send Message
          </Button>
        </S.ContactUsFormButton>
      </form>
    </S.ContactUsFormContainer>
  );
};
