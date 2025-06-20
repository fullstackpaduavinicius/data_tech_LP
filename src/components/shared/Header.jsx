import React, { useState } from "react";
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  IconButton, 
  Menu, 
  MenuItem, 
  useTheme, 
  useMediaQuery 
} from "@mui/material";
import { motion } from "framer-motion";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import { styled } from "@mui/material/styles";

// Estilos personalizados com Emotion
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: "rgba(10, 25, 47, 0.9)",
  backdropFilter: "blur(10px)",
  boxShadow: "none",
  padding: theme.spacing(1, 0),
}));

const LogoText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "1.5rem",
  background: "linear-gradient(90deg, #64f4ac 0%, #5fd8fc 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));

const NavButton = motion(
  styled(Button)(({ theme }) => ({
    color: theme.palette.common.white,
    fontWeight: 500,
    "&:hover": {
      color: theme.palette.primary.main,
      background: "transparent",
    },
  }))
);

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setMobileMenuOpen(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    if (sectionId === "#header" || sectionId === "#") {
      // Scroll para o topo da página
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else {
      // Scroll para seções específicas
      const section = document.querySelector(sectionId);
      if (section) {
        const offset = 80; // Offset para o header fixo
        const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: sectionTop, behavior: "smooth" });
      }
    }
    handleMenuClose();
  };

  // Links do menu
  const navItems = [
    { label: "Início", href: "#" }, // Alterado para "#" para ir ao topo
    { label: "Serviços", href: "#services" },
    { label: "Sobre", href: "#about" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <StyledAppBar position="fixed" id="header">
      <Toolbar sx={{ justifyContent: "space-between", maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        {/* Logo - também funciona como botão Home */}
        <Box 
          component={motion.div} 
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection("#")}
          sx={{ cursor: "pointer" }}
        >
          <LogoText variant="h1">SuanDataTech</LogoText>
        </Box>

        {/* Menu Desktop */}
        {!isMobile ? (
          <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
            {navItems.map((item) => (
              <NavButton
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </NavButton>
            ))}
            <NavButton
              variant="contained"
              color="primary"
              endIcon={<FiArrowRight />}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              sx={{ ml: 2 }}
              onClick={() => scrollToSection("#contact")}
            >
              Consultoria
            </NavButton>
          </Box>
        ) : (
          /* Menu Mobile */
          <>
            <IconButton
              color="inherit"
              onClick={handleMenuOpen}
              component={motion.div}
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={mobileMenuOpen}
              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  background: "rgba(10, 25, 47, 0.95)",
                  width: "100vw",
                  maxWidth: "100%",
                  padding: theme.spacing(2),
                },
              }}
            >
              {navItems.map((item) => (
                <MenuItem
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  component={motion.div}
                  whileHover={{ x: 5 }}
                  sx={{ py: 2 }}
                >
                  <Typography variant="h6">{item.label}</Typography>
                </MenuItem>
              ))}
              <MenuItem sx={{ mt: 2 }}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  endIcon={<FiArrowRight />}
                  component={motion.div}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => scrollToSection("#contact")}
                >
                  Consultoria
                </Button>
              </MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;