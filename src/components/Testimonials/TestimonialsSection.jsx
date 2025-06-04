import React from "react";
import { Box, Typography, Container, Avatar, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "Carlos Mendes",
    position: "CEO, Fintech Solutions",
    content:
      "O Suan transformou nossa análise de dados. Em 3 meses, otimizamos 40% dos processos financeiros e reduzimos custos operacionais em 25%. Recomendo fortemente seus serviços!",
    avatar: "/path/to/avatar1.jpg", // Substituir por imagem real
    rating: 5,
  },
  {
    id: 2,
    name: "Ana Beatriz",
    position: "Diretora Financeira, Retail Corp",
    content:
      "A consultoria em controladoria foi essencial para nosso crescimento. Com os dashboards personalizados, ganhamos visibilidade completa do nosso fluxo de caixa.",
    avatar: "/path/to/avatar2.jpg", // Substituir por imagem real
    rating: 5,
  },
  {
    id: 3,
    name: "Roberto Almeida",
    position: "Gerente de Dados, Logística Plus",
    content:
      "A modelagem de dados desenvolvida pelo Suan integrou 5 sistemas diferentes, eliminando horas de trabalho manual. A solução foi perfeita para nossas necessidades.",
    avatar: "/path/to/avatar3.jpg", // Substituir por imagem real
    rating: 4,
  },
];

const StarRating = ({ rating }) => {
  const theme = useTheme();
  return (
    <Box display="flex" gap={0.5} mt={1}>
      {[...Array(5)].map((_, i) => (
        <Box
          key={i}
          component="span"
          color={i < rating ? theme.palette.warning.main : theme.palette.grey[400]}
        >
          ★
        </Box>
      ))}
    </Box>
  );
};

const TestimonialCard = ({ testimonial }) => {
  const theme = useTheme();
  
  return (
    <Box
      sx={{
        p: 4,
        m: 2,
        bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[50],
        borderRadius: 2,
        boxShadow: 1,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <StarRating rating={testimonial.rating} />
      <Typography variant="body1" sx={{ mt: 2, mb: 3, fontStyle: "italic" }}>
        "{testimonial.content}"
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", mt: "auto" }}>
        <Avatar
          src={testimonial.avatar}
          alt={testimonial.name}
          sx={{ width: 56, height: 56, mr: 2 }}
        />
        <Box>
          <Typography variant="subtitle1" fontWeight="bold">
            {testimonial.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {testimonial.position}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const TestimonialsSection = () => {
  const theme = useTheme();
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box
      component="section"
      sx={{
        py: 8,
        bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100],
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h4"
            component="h2"
            textAlign="center"
            fontWeight="bold"
            mb={1}
          >
            O que dizem nossos clientes
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            color="text.secondary"
            maxWidth="700px"
            mx="auto"
            mb={6}
          >
            Confira depoimentos de empresários e profissionais que transformaram seus negócios com nossas soluções.
          </Typography>

          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </Slider>

          <Box textAlign="center" mt={6}>
            <Typography variant="body2" color="text.secondary">
              +50 clientes satisfeitos | 98% de aprovação | 100+ projetos entregues
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;