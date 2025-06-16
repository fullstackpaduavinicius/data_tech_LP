import React, { useState } from "react";
import { 
  Box, 
  Typography, 
  Grid, 
  TextField, 
  Button, 
  IconButton, 
  useTheme, 
  useMediaQuery,
  Alert,
  Snackbar 
} from "@mui/material";
import { motion } from "framer-motion";
import { FiSend, FiMapPin, FiPhone, FiMail, FiLinkedin } from "react-icons/fi";
import { styled } from "@mui/material/styles";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Schema de validação
const schema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  message: yup.string().required("Por favor, descreva a necessidade da sua empresa"),
});

// Estilos personalizados
const ContactContainer = styled(Box)(({ theme }) => ({
  background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)",
  padding: theme.spacing(10, 2),
  color: theme.palette.text.primary,
}));

const ContactCard = motion(
  styled(Box)(({ theme }) => ({
    background: theme.palette.common.white,
    borderRadius: "16px",
    padding: theme.spacing(4),
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
    height: "100%",
  }))
);

const ContactSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const { control, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const sendToWhatsApp = (formData) => {
    const message = `*Nova mensagem do site Datatech Consultoria*\n\n*Nome:* ${formData.name}\n*E-mail:* ${formData.email}\n\n*Mensagem:*\n${formData.message}\n\n*Estou interessado em soluções de controladoria e análise de dados!*`;
    
    // Cria um link temporário e clica programaticamente (funciona em todos os navegadores)
    const link = document.createElement('a');
    link.href = `https://wa.me/5579998807035?text=${encodeURIComponent(message)}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setOpenSnackbar(true);
    reset();
  };

  const contactMethods = [
    {
      icon: <FiMail size={24} color={theme.palette.primary.main} />,
      title: "E-mail",
      value: "suan92@gmail.com",
      href: "mailto:suan92@gmail.com",
    },
    {
      icon: <FiPhone size={24} color={theme.palette.primary.main} />,
      title: "Telefone",
      value: "(79) 99138-1606",
      href: "tel:+5579991381606",
    },
    {
      icon: <FiMapPin size={24} color={theme.palette.primary.main} />,
      title: "Localização",
      value: "Aracaju, SE",
      href: "https://maps.google.com/?q=Aracaju,SE",
    },
    {
      icon: <FiLinkedin size={24} color={theme.palette.primary.main} />,
      title: "LinkedIn",
      value: "linkedin.com/in/suan-datatech",
      href: "https://linkedin.com/in/suan-datatech",
    },
  ];

  return (
    <ContactContainer id="contact">
      <Grid container justifyContent="center" spacing={6}>
        {/* Título */}
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Typography
              variant={isMobile ? "h4" : "h3"}
              fontWeight={700}
              gutterBottom
            >
              Vamos <Box component="span" color="primary.main">conversar</Box>
            </Typography>
            <Typography
              variant="body1"
              maxWidth="800px"
              margin="0 auto"
              sx={{ opacity: 0.8 }}
            >
              Entre em contato para discutir seu projeto ou agendar uma consultoria.
            </Typography>
          </motion.div>
        </Grid>

        {/* Formulário */}
        <Grid item xs={12} md={6}>
          <ContactCard
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Typography variant="h5" fontWeight={600} gutterBottom>
              Envie uma mensagem
            </Typography>
            <form onSubmit={handleSubmit(sendToWhatsApp)}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Nome"
                        variant="outlined"
                        fullWidth
                        error={!!errors.name}
                        helperText={errors.name?.message}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="E-mail"
                        variant="outlined"
                        fullWidth
                        error={!!errors.email}
                        helperText={errors.email?.message}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="message"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Descreva a necessidade da sua empresa"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        error={!!errors.message}
                        helperText={errors.message?.message}
                        placeholder="Ex.: Preciso de uma controladoria financeira. Gestão de custos, relatórios e planejamento estratégico..."
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    endIcon={<FiSend />}
                    fullWidth
                    component={motion.div}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Enviar Mensagem pelo WhatsApp
                  </Button>
                </Grid>
              </Grid>
            </form>
          </ContactCard>
        </Grid>

        {/* Informações de Contato */}
        <Grid item xs={12} md={6}>
          <ContactCard
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Typography variant="h5" fontWeight={600} gutterBottom>
              Outras formas de contato
            </Typography>
            <Grid container spacing={3} sx={{ mt: 2 }}>
              {contactMethods.map((method, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Box
                    component={motion.div}
                    whileHover={{ y: -5 }}
                    sx={{ display: "flex", alignItems: "center", gap: 2 }}
                  >
                    <IconButton
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ background: "rgba(100, 244, 172, 0.1)" }}
                    >
                      {method.icon}
                    </IconButton>
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        {method.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        fontWeight={500}
                        component="a"
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          textDecoration: "none",
                          color: "inherit",
                          "&:hover": { color: theme.palette.primary.main },
                        }}
                      >
                        {method.value}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </ContactCard>
        </Grid>
      </Grid>

      {/* Snackbar de confirmação */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Redirecionando para o WhatsApp... Complete o envio da mensagem lá.
        </Alert>
      </Snackbar>
    </ContactContainer>
  );
};

export default ContactSection;