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

// Schema de validação com Yup
const schema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  message: yup.string().required("Mensagem é obrigatória"),
});

// Estilos personalizados com Emotion
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

  const onSubmit = (data) => {
    console.log("Formulário enviado:", data);
    // Aqui você pode integrar com API (ex: axios) ou enviar para o WhatsApp
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
      href: "#",
    },
    {
      icon: <FiLinkedin size={24} color={theme.palette.primary.main} />,
      title: "LinkedIn",
      value: "linkedin.com/in/suan-datatech",
      href: "#",
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
              variant="h6"
              color="primary.main"
              gutterBottom
            >
              
            </Typography>
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
            <form onSubmit={handleSubmit(onSubmit)}>
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
                        label="Mensagem"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        error={!!errors.message}
                        helperText={errors.message?.message}
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
                  >
                    Enviar Mensagem
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
          Mensagem enviada com sucesso! Entraremos em contato em breve.
        </Alert>
      </Snackbar>
    </ContactContainer>
  );
};

export default ContactSection;
