import React from "react";
import { Box, Typography, Button, useTheme, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { styled } from "@mui/material/styles";

// Estilos personalizados com Emotion
const HeroContainer = styled(Box)(({ theme }) => ({
  minHeight: "80vh",
  display: "flex",
  alignItems: "center",
  background: "linear-gradient(135deg, #0a192f 0%, #172a45 100%)",
  color: theme.palette.common.white,
  padding: theme.spacing(4),
  position: "relative",
  overflow: "hidden",
}));

const HeroContent = styled(Box)(({ theme }) => ({
  maxWidth: "1200px",
  margin: "0 auto",
  zIndex: 1,
  textAlign: { xs: "center", md: "left" },
}));

const StyledButton = motion(
  styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(4),
    padding: theme.spacing(2, 4),
    fontSize: "1.1rem",
    fontWeight: 600,
    borderRadius: "8px",
    background: theme.palette.primary.main,
    "&:hover": {
      background: theme.palette.primary.dark,
    },
  }))
);

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Função para redirecionar para o WhatsApp
  const handleWhatsAppClick = () => {
    const phoneNumber = "5579998807035";
    const message = "Olá, gostaria de falar com um especialista da Datatech.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <HeroContainer component="section">
      <HeroContent>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Typography
              variant="h6"
              component="p"
              color="primary.main"
              gutterBottom
            >
              CONSULTORIA DATATECH
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant={isMobile ? "h3" : "h2"}
              component="h1"
              fontWeight={700}
              gutterBottom
            >
              Transforme seus dados em{" "}
              <Box component="span" color="primary.main">
                resultados
              </Box>
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant={isMobile ? "body1" : "h6"}
              component="p"
              maxWidth="800px"
              marginBottom={4}
            >
              Soluções personalizadas em controladoria, modelagem de dados e
              análise financeira para impulsionar seu negócio.
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <StyledButton
              variant="contained"
              endIcon={<FiArrowRight />}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsAppClick}
            >
              Fale com o especialista
            </StyledButton>
          </motion.div>
        </motion.div>
      </HeroContent>

      {/* Efeito de background animado (opcional) */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        sx={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "50%",
          height: "100%",
          background:
            "url('https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2232&auto=format&fit=crop') no-repeat center",
          backgroundSize: "cover",
        }}
      />
    </HeroContainer>
  );
};

export default HeroSection;