import React from "react";
import { Box, Typography, Container, Button, Grid, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

const VideoSection = () => {
  const theme = useTheme();
  
  return (
    <Box
      component="section"
      id="about" // ID adicionado para linkagem com o Header
      sx={{
        py: 10,
        bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.grey[50],
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h3"
                component="h2"
                fontWeight="bold"
                gutterBottom
                sx={{
                  color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
                }}
              >
                Transforme seus dados em resultados tangíveis
              </Typography>
              
              <Typography variant="h5" component="h3" gutterBottom fontWeight="medium">
                Como Suan Rodrigues pode impulsionar sua empresa
              </Typography>
              
              <Typography variant="body1" paragraph sx={{ mb: 2 }}>
                Em um mercado cada vez mais competitivo, ter <strong>controle financeiro preciso</strong> e <strong>análise de dados estratégica</strong> não é um diferencial - é uma necessidade.
              </Typography>
              
              <Typography variant="body1" paragraph sx={{ mb: 2 }}>
                Com minha consultoria <strong>DataTech</strong>, você terá:
              </Typography>
              
              <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                <Typography component="li" paragraph>
                  <strong>Redução de até 30% nos custos operacionais</strong> através da otimização de processos
                </Typography>
                <Typography component="li" paragraph>
                  <strong>Relatórios financeiros em tempo real</strong> para tomada de decisão ágil
                </Typography>
                <Typography component="li" paragraph>
                  <strong>Automação de 80% das tarefas manuais</strong> com modelagem de dados personalizada
                </Typography>
                <Typography component="li" paragraph>
                  <strong>Previsibilidade financeira</strong> com dashboards interativos e indicadores chave
                </Typography>
              </Box>
              
              <Typography variant="body1" paragraph sx={{ mb: 4 }}>
                Meu método combina <strong>expertise técnica</strong> com uma abordagem prática, focada em entregar resultados mensuráveis para seu negócio.
              </Typography>
              
              <Button
                variant="contained"
                size="large"
                color="primary"
                endIcon={<PlayCircleFilledIcon />}
                sx={{
                  borderRadius: 2,
                  py: 1.5,
                  px: 4,
                  fontWeight: 'bold',
                  boxShadow: theme.shadows[4],
                  '&:hover': {
                    boxShadow: theme.shadows[8],
                  }
                }}
                onClick={() => {
                  // Lógica para abrir modal de vídeo ou redirecionar
                  console.log("Assistir vídeo explicativo");
                }}
              >
                Ver Demonstração
              </Button>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: theme.shadows[10],
              }}
            >
              {/* Placeholder do vídeo - substituir pelo componente real de vídeo */}
              <Box
                sx={{
                  position: 'relative',
                  paddingTop: '56.25%', // 16:9 aspect ratio
                  bgcolor: theme.palette.grey[300],
                  cursor: 'pointer',
                  '&:hover .play-button': {
                    transform: 'scale(1.1)',
                  }
                }}
              >
                <Box
                  className="play-button"
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    transition: 'transform 0.3s ease',
                    color: theme.palette.primary.main,
                    fontSize: '72px',
                    opacity: 0.9,
                  }}
                >
                  <PlayCircleFilledIcon fontSize="inherit" />
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    position: 'absolute',
                    bottom: 16,
                    left: 16,
                    color: theme.palette.common.white,
                    bgcolor: 'rgba(0,0,0,0.6)',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                  }}
                >
                  Demonstração de 2 minutos
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default VideoSection;