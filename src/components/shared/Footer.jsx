import React from "react";
import { Box, Typography, Grid, Link, IconButton, Divider, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { FiFacebook, FiLinkedin, FiInstagram, FiMail, FiPhone } from "react-icons/fi";
import { styled } from "@mui/material/styles";

// Estilos personalizados com Emotion
const FooterContainer = styled(Box)(({ theme }) => ({
  background: "linear-gradient(135deg, #0a192f 0%, #172a45 100%)",
  color: theme.palette.common.white,
  padding: theme.spacing(8, 2),
}));

const FooterLink = motion(
  styled(Link)(({ theme }) => ({
    color: theme.palette.common.white,
    display: "block",
    marginBottom: theme.spacing(1),
    "&:hover": {
      color: theme.palette.primary.main,
    },
  }))
);

const SocialIcon = motion(
  styled(IconButton)(({ theme }) => ({
    color: theme.palette.common.white,
    background: "rgba(255, 255, 255, 0.1)",
    marginRight: theme.spacing(1),
    "&:hover": {
      background: theme.palette.primary.main,
    },
  }))
);

const Footer = () => {
  const theme = useTheme();

  // Links do footer
  const sections = [
    {
      title: "Serviços",
      links: [
        { label: "Consultoria Financeira", href: "#" },
        { label: "Modelagem de Dados", href: "#" },
        { label: "Controladoria", href: "#" },
      ],
    },
    {
      title: "Contato",
      links: [
        { label: "suan92@gmail.com", href: "mailto:suan92@gmail.com", icon: <FiMail /> },
        { label: "(79) 99138-1606", href: "tel:+5579991381606", icon: <FiPhone /> },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FiLinkedin />, href: "#" },
    { icon: <FiInstagram />, href: "#" },
    { icon: <FiFacebook />, href: "#" },
  ];

  return (
    <FooterContainer component="footer">
      <Grid container justifyContent="center" spacing={6}>
        {/* Seção de Serviços e Contato */}
        {sections.map((section, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                {section.title}
              </Typography>
              {section.links.map((link, i) => (
                <FooterLink
                  key={i}
                  href={link.href}
                  underline="none"
                  whileHover={{ x: 5 }}
                >
                  {link.icon && (
                    <Box component="span" sx={{ mr: 1, verticalAlign: "middle" }}>
                      {link.icon}
                    </Box>
                  )}
                  {link.label}
                </FooterLink>
              ))}
            </motion.div>
          </Grid>
        ))}

        {/* Seção de Redes Sociais */}
        <Grid item xs={12} sm={6} md={3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
              Redes Sociais
            </Typography>
            <Box>
              {socialLinks.map((social, i) => (
                <SocialIcon
                  key={i}
                  href={social.href}
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </SocialIcon>
              ))}
            </Box>
          </motion.div>
        </Grid>
      </Grid>

      {/* Divider e Copyright */}
      <Divider sx={{ my: 6, background: "rgba(255, 255, 255, 0.1)" }} />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Suan DataTech. Todos os direitos reservados.
        </Typography>
      </motion.div>
    </FooterContainer>
  );
};

export default Footer;