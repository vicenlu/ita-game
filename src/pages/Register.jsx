import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../store/authentication/authContext';
import { inputs } from '../components/atoms/input/Input';
import Input from '../components/atoms/input/Input';

// TODO: informar el usuario ha sido o no registrado
function Register() {
  const [values, setValues] = useState({
    name: '',
    surname: '',
    sex: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { register, error } = useContext(AuthContext);

  const navigate = useNavigate();

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: values.name,
      surname: values.surname,
      email: values.email,
      password: values.password,
      framework: '',
      ITApoints: 0,
      ITAawards: [],
      activities: 0,
      avatar: {
        sex: values.sex,
        hairStyle: 'normal',
        hairColor: '#BA4A00',
        faceColor: '#FAD7A0',
        hatStyle: 'beanie',
        hatColor: '#F1C40F',
        eyeStyle: 'smile', // circle, oval, smile
        glassesStyle: 'round', // none, round, square
        noseStyle: 'long', //short, long, round
        shirtStyle: 'short', // hoody, short, polo
        shirtColor: '#BB8FCE',
        bgColor: '#58c914',
      },
    };
    register(user)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const inputArray = inputs(values.password);

  return (
    <div className="flex min-h-screen justify-center pt-20 px-4">
      <div className="flex flex-col justify-between w-full max-w-xs">
        <div className="w-full max-w-xs">
          <div className="pb-3.5">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Registro
            </h2>
          </div>
          <form
            className="mt-8 space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="grid gap-3 rounded-md shadow-sm">
              {inputArray.map((input) => (
                <Input
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Pick your avatar</span>
                <span className="label-text-alt">Woman/Man</span>
              </label>
              <select
                name="sex"
                className="select select-bordered"
                onChange={onChange}
              >
                <option value="woman">woman</option>
                <option value="man">man</option>
              </select>
            </div>
            <div className="pt-4">
              <button type="submit" className="btn btn-block btn-primary">
                <span className="font-bold">Registrarme</span>
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-center pb-10">
          <Link
            to="/login"
            className="font-bold text-black hover:text-indigo-500 underline"
          >
            ¿Tienes una cuenta?,entrar
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
