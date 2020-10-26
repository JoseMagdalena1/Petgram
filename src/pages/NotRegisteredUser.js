import React, { Fragment } from "react";
import Context from "../Context";
import { UserForm } from "../components/UserForm";
import { RegisterMutation } from "../container/RegisterMutation";
import { LoginMutation } from "../container/LoginMutation";

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {({ activateAuth }) => {
      return (
        <Fragment>
          <RegisterMutation>
            {(register, { data, loading, error }) => {
              const onSubmit = ({ email, password }) => {
                const input = { email, password };
                const variables = { input };
            
                register({ variables }).then(({data}) =>{
                  const {signup} = data
                  activateAuth(signup)
                });
              };
              const errorMsg = error && "el usuario ya existe";

              return (
                <UserForm
                  disabled={loading}
                  error={errorMsg}
                  title="registrarse"
                  onSubmit={onSubmit}
                ></UserForm>
              );
            }}
          </RegisterMutation>

          <LoginMutation>
            {(login,{data, loading,error}) => {
               const onSubmit = ({ email, password }) => {
                const input = { email, password };
                const variables = { input };
                login({ variables }).then(({data}) => {
                  const {login} = data
                  activateAuth(login)
                })
              };
              const errorMsg = error && "La contraseña o el usuario son incorrectos";

              
             return <UserForm 
              disabled={loading}
              error={errorMsg}
                title="iniciarSesion"
                onSubmit={onSubmit}
              />;
            }}
          </LoginMutation>
        </Fragment>
      );
    }}
  </Context.Consumer>
);