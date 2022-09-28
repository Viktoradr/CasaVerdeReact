import axios, { AxiosResponse } from "axios";
export const modeloEmail = (name: string) => {
  return `Olá, ${name}.

    Boas-vindas à Casa Verde! Você se cadastrou em 
    nossa newsletter e vai começar a receber e-mails 
    com as novidades de nossa loja e dicas de como 
    cuidar de suas plantas.
    
    Até logo!`;
};

export const sendEmail = (body: string): Promise<AxiosResponse<any, any>> => {
  const config = { body };
  return axios.post<any>("email", config);
};

//   const config: IEmailConfig = {
//     personalizations: [
//       {
//         to: [
//           {
//             email: emailTo,
//             name: emailName,
//           },
//         ],
//       },
//       {
//         from: [
//           {
//             email: emailTo,
//             name: emailName,
//           },
//         ],
//       },
//     ],
//     from: {
//       email: process.env.EMAIL_FROM,
//       name: process.env.EMAIL_FROM_NAME,
//     },
//     subject: "Your Example Order Confirmation",
//     content: [
//       {
//         type: "text/html",
//         value: "",
//       },
//     ],
//     batchId: "AsdFgHjklQweRTYuIopzXcVBNm0aSDfGHjklmZcVbNMqWert1znmOP2asDFjkl",
//     ipPoolName: "transactional email",
//     mailSettings: {
//       bypassListManagement: {
//         enable: false,
//       },
//       footer: {
//         enable: false,
//       },
//       sandboxMode: {
//         enable: false,
//       },
//     },
//     trackingSettings: {
//       clickTracking: {
//         enable: true,
//         enableText: false,
//       },
//       openTracking: {
//         enable: true,
//         substitutionTag: "%open-track%",
//       },
//       subscriptionTracking: {
//         enable: false,
//       },
//     },
//   };
