import React from "react";
import { Box, Typography, Grid, Avatar, useTheme, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import { FiAward, FiDatabase, FiDollarSign } from "react-icons/fi";

// Estilos personalizados com Emotion
const AboutContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.common.white,
  padding: theme.spacing(10, 2),
  color: theme.palette.text.primary,
}));

const SkillCard = motion(
  styled(Box)(({ theme }) => ({
    background: "rgba(100, 244, 172, 0.1)",
    borderRadius: "16px",
    padding: theme.spacing(4),
    textAlign: "center",
    border: "1px solid rgba(100, 244, 172, 0.3)",
    cursor: "default",
  }))
);

const AboutSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Dados do perfil (personalizáveis)
  const skills = [
    {
      icon: <FiDatabase size={32} color={theme.palette.primary.main} />,
      title: "Modelagem de Dados",
      description: "Estruturação de bancos de dados e dashboards para análise eficiente.",
    },
    {
      icon: <FiDollarSign size={32} color={theme.palette.primary.main} />,
      title: "Controladoria Financeira",
      description: "Gestão de custos, relatórios e planejamento estratégico.",
    },
    {
      icon: <FiAward size={32} color={theme.palette.primary.main} />,
      title: "Consultoria Personalizada",
      description: "Soluções sob medida para suas necessidades específicas.",
    },
  ];

  return (
    <AboutContainer id="about">
      <Grid container justifyContent="center" spacing={6}>
        {/* Título e Introdução */}
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
              Especialista em <Box component="span" color="primary.main">Dados & Finanças</Box>
            </Typography>
            <Typography
              variant="body1"
              maxWidth="800px"
              margin="0 auto"
              sx={{ opacity: 0.8 }}
            >
              Com anos de experiência em consultoria DataTech, ajudo empresas a transformar dados 
              em decisões estratégicas e resultados tangíveis. Minha abordagem combina técnica 
              avançada e visão de negócios.
            </Typography>
          </motion.div>
        </Grid>

        {/* Avatar (opcional) */}
        <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Avatar
              alt="Suan Rodrigues - Consultor DataTech"
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&auto=format&fit=crop"
              sx={{
                width: 250,
                height: 250,
                border: `4px solid ${theme.palette.primary.main}`,
              }}
            />
          </motion.div>
        </Grid>

        {/* Habilidades */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={4}>
            {skills.map((skill, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <SkillCard
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ y: -5 }}
                >
                  {skill.icon}
                  <Typography variant="h6" fontWeight={600} sx={{ mt: 2 }}>
                    {skill.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1, opacity: 0.8 }}>
                    {skill.description}
                  </Typography>
                </SkillCard>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </AboutContainer>
  );
};

export default AboutSection;