import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { formSchema } from '../../utils/validations'

type Inputs = {
  name: string
  surname: string
  email: string
  phone: string
  company: string
  date: string
  contact: string
  message: string
}

export const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(formSchema),
    mode: 'onBlur',
  })

  const onSubmit = (data: any) => console.log(data)

  console.log(errors)

  return (
    <section
      id='cta'
      className='pb-20 mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5'>
      <div className='w-full relative py-8 md:py-10 px-6 md:px-8 rounded-2xl bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-900'>
        <div className='absolute right-0 top-0 h-full w-full flex justify-end'>
          <div className='w-28 h-28 overflow-auto flex rounded-xl relative blur-2xl'>
            <span className='absolute w-16 h-16 -top-1 -right-1 bg-green-500 rounded-md rotate-45'></span>
            <span className='absolute w-16 h-16 -bottom-1 -right-1 bg-[#FCDC58] rounded-md rotate-45'></span>
            <span className='absolute w-16 h-16 -bottom-1 -left-1 bg-primary rounded-md rotate-45'></span>
          </div>
        </div>

        <div className='absolute left-0 bottom-0 h-full w-full flex items-end'>
          <div className='w-28 h-28 overflow-auto flex rounded-xl relative blur-2xl'>
            <span className='absolute w-16 h-16 -top-1 -right-1 bg-green-500 rounded-md rotate-45'></span>
            <span className='absolute w-16 h-16 -bottom-1 -right-1 bg-[#FCDC58] rounded-md rotate-45'></span>
            <span className='absolute w-16 h-16 -bottom-1 -left-1 bg-primary rounded-md rotate-45'></span>
          </div>
        </div>
        <div className='mx-auto max-w-xl md:max-w-2xl relative'>
          <h6
            className='text-3xl/tight sm:text-4xl/tight md:text-5xl/tight
          font-bold text-heading-1 text-center mb-12'>
            Realizanos tu consulta
          </h6>
          <p className='text-lg text-gray-600 dark:text-gray-400 mb-8'>
            Contanos tus necesidades para que podamos cotizarte un plan a medida
            sin cargo.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            method='POST'
            className='max-w-md mx-auto'>
            <div className='grid md:grid-cols-2 md:gap-6'>
              <div className='relative z-0 w-full mb-1 group'>
                <input
                  type='text'
                  id='name'
                  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder=''
                  {...register('name', { required: true })}
                />
                <label
                  htmlFor='name'
                  className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                  Nombre
                </label>
              </div>
              <div className='relative z-0 w-full mb-1 group'>
                <input
                  type='text'
                  id='surname'
                  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder=''
                  {...register('surname', { required: true })}
                />
                <label
                  htmlFor='surname'
                  className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                  Apellido
                </label>
              </div>
            </div>
            <div className='mb-4 flex flex-col gap-2'>
              {errors.name && (
                <span className='text-red-500 text-sm'>
                  {errors.name?.message}
                </span>
              )}
              {errors.surname && (
                <span className='text-red-500 text-sm'>
                  {errors.surname?.message}
                </span>
              )}
            </div>
            <div className='relative z-0 w-full mb-5 group'>
              <input
                type='email'
                id='email'
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=''
                {...register('email', { required: true })}
              />
              <label
                htmlFor='email'
                className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                Correo electronico
              </label>
              <div className='mb-4 flex flex-col gap-2'>
              {errors.email && (
                <span className='text-red-500 text-sm'>
                  {errors.email?.message}
                </span>
              )}
            </div>
            </div>

            <div className='grid md:grid-cols-2 md:gap-x-6'>
              <div className='relative z-0 w-full mb-1 group'>
                <input
                  type='tel'
                  id='phone'
                  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  {...register('phone', { required: true })}
                />
                <label
                  htmlFor='phone'
                  className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                  Teléfono
                </label>
              </div>
              <div className='relative z-0 w-full mb-1 group'>
                <input
                  type='text'
                  id='company'
                  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  {...register('company', { required: true })}
                />
                <label
                  htmlFor='company'
                  className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                  Nombre de tu empresa
                </label>
              </div>
            </div>
              <div className='mb-4 flex flex-col gap-2'>
              {errors.phone && (
                <span className='text-red-500 text-sm'>
                  {errors.phone?.message}
                </span>
              )}
              {errors.company && (
                <span className='text-red-500 text-sm'>
                  {errors.company?.message}
                </span>
              )}
            </div>
            <div className='relative z-0 w-full mb-5 group'>
              <select
                id='date'
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                {...register('date', { required: true })}>
                <option value=''>¿En qué momento podemos contactarte?</option>
                <option value='completo'>En cualquier momento del día</option>
                <option value='mañana'>Por la mañana (de 9 a 12 hs)</option>
                <option value='tarde'>Por la tarde (de 14 a 18 hs)</option>
              </select>
            </div>
            <div className='relative z-0 w-full mb-5 group'>
              <select
                id='contact'
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                {...register('contact', { required: true })}>
                <option value=''>
                  ¿Por qué medio preferís que te contactemos?
                </option>
                <option value='indestinto'>Es indestinto</option>
                <option value='email'>Correo electrónico</option>
                <option value='telefono'>Llamado telefónico</option>
                <option value='whatsapp'>Whatsapp</option>
              </select>
            </div>
            <div className='relative z-0 w-full mb-5 group'>
              <label
                htmlFor=''
                id='message'
                className='text-sm text-gray-900'>
                Dejanos tu consulta
              </label>
              <textarea
                id='message'
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer resize-none'
                {...register('message', { required: true })}></textarea>
                {
                  errors.message && (
                    <span className='text-red-500 text-sm'>
                      {errors.message?.message}
                    </span>
                  )
                }
            </div>
            <button
              type='submit'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
              Enviar consulta
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
