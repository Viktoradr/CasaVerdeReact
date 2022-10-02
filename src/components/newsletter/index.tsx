import { regexEmail } from "common/constants";
import { modeloEmail } from "common/email";
import { useFormik } from "common/validation";
import { Form, Newsletter, Container, ContainerText, Error } from "./styles";

export default function AssinaturaNewsletter() {
  const formik: any = useFormik({
    initialValues: {
      userEmail: ""
    },
    validate: function (values: any) {
      const errors = {} as any;

      if (!regexEmail.test(values.userEmail)) {
        errors.userEmail = "Email inválido";
      }

      return errors;
    },
  });

  const enviarPorEmail = (values: any) => {
    const body = modeloEmail(values.userEmail.split('@')[0])

    // sendEmail(body)
    //   .then((res) => {
    //     alert(
    //       `Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${formik.values.userEmail}`
    //     );
    //   })
    //   .catch((err) => console.log(err));

    alert(
      `Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${formik.values.userEmail}`
    );
  };

  const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    if (!formik.errors.userEmail) {
      enviarPorEmail(formik.values);
    }
  };

  return (
    <Newsletter>
      <Container>
        <ContainerText>
          <h2>Sua casa com as</h2>
          <h1>
            melhores <br /> plantas
          </h1>
          <p>
            Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
            torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu
            e-mail e assine nossa newsletter para saber das novidades da marca.
          </p>
        </ContainerText>

        <Form onSubmit={aoSubmeterForm}>
          <div className="fieldGroup">
            <input
              type="email"
              id="userEmail"
              name="userEmail"
              placeholder="Insira seu E-mail"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.userEmail}
            />
            <button type="submit" disabled={formik.errors.length > 0}>
              Assinar Newsletter
            </button>
          </div>
          {formik.touched.userEmail && formik.errors.userEmail && (
            <Error>{formik.errors.userEmail}</Error>
          )}
        </Form>
      </Container>
    </Newsletter>
  );
}
