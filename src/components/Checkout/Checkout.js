import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router';
import { CartContext } from '../../context/CartContext';
import { UIContext } from '../../context/UIContext.js';
import { LoaderView } from '../Loader/Loader';
import { generarOrden } from '../../firebase/generarOrden';
import Swal from 'sweetalert2';
import './Checkout.scss';

export const Checkout = () => {
  const { loading, setLoading } = useContext(UIContext);
  const { cart, finalPrice, clearCart } =
    useContext(CartContext);
  const [mailConfirmation, setMailConfirmation] =
    useState('');
  const [values, setValues] = useState({
    nombre: '',
    apellido: '',
    mail: '',
    tel: '',
  });

  const handleImputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleMailValidation = (e) => {
    setMailConfirmation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.nombre.length < 3) {
      Swal.fire('nombre inválido');
      return;
    }
    if (values.apellido.length < 3) {
      Swal.fire('apellido inválido');
      return;
    }
    if (!values.mail.includes('@')) {
      Swal.fire('mail inválido');
      return;
    }
    if (mailConfirmation !== values.mail) {
      Swal.fire('Los emails deben ser iguales');
      return;
    }

    if (values.tel.length < 3) {
      Swal.fire('telefono inválido');
      return;
    }

    setLoading(true);
    generarOrden(values, cart, finalPrice())
      .then((res) => {
        Swal.fire({
          icon: 'success',
          title: 'Orden registrada',
          text: `guarde su número de referencia: ${res}`,
          willClose: () => {
            clearCart();
          },
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Producto sin stock',
          text: `No hay stock de: ${err
            .map((el) => el.name)
            .join(', ')}`,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      {cart.length === 0 && <Redirect to="/" />}

      {loading && <LoaderView />}
      <div className="form__container">
        <h2 className="form__title">
          Complete con sus datos
        </h2>
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="form__input"
            type="text"
            placeholder="Nombre"
            name="nombre"
            value={values.nombre}
            onChange={handleImputChange}
          />
          <br />

          <input
            className="form__input"
            type="text"
            placeholder="Apellido"
            name="apellido"
            value={values.apellido}
            onChange={handleImputChange}
          />
          <br />

          <input
            className="form__input"
            type="mail"
            placeholder="E-mail"
            name="mail"
            value={values.mail}
            onChange={handleImputChange}
          />
          <br />
          <input
            className="form__input"
            type="mail"
            placeholder="Repetí tu E-mail"
            name="mail2"
            onChange={handleMailValidation}
          />
          <br />

          <input
            className="form__input"
            type="tel"
            placeholder="Teléfono"
            name="tel"
            value={values.tel}
            onChange={handleImputChange}
          />
          <br />
          <button
            className="button button__green"
            type="submit"
            disabled={loading}
          >
            Finalizar
          </button>
        </form>
      </div>
    </>
  );
};
