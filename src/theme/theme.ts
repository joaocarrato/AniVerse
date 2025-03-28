import {createTheme} from '@shopify/restyle';

export const palette = {
  // Cores Principais (Ação/Energia)
  actionRed: '#FF3B3B', // Para CTAs primários (ex: "Assistir agora")
  neonPink: '#FF1A8C', // Destaques femininos/romance
  cyberBlue: '#00C1DE', // Elementos tech/mecha
  energyCyan: '#00FFE0', // Efeitos especiais

  // Secundárias (Mistério/Fantasia)
  mysticPurple: '#8A2BE2', // Gêneros sobrenaturais
  dragonOrange: '#FF6B35', // Aventura/shounen
  yokaiGreen: '#2Ecc71', // Natureza/sobrenatural

  // Neutros (Fundo Escuro Padrão)
  voidBlack: '#0A0A0A', // Fundo principal
  shadowGray: '#1A1A1A', // Superfícies
  steelGray: '#2D2D2D', // Bordas
  lightSteelGray: '#3A3A3A', // Para fundos sobre surface
  ghostWhite: '#F0F0F0', // Texto
  grayBlack: '#000000',

  // Novas cores para estados desabilitados
  disabledBackground: '#333333', // Fundo desativado
  disabledText: '#666666', // Texto desativado
  loadingIndicator: '#B3B3B3', // Cor do loading

  // Feedback
  soulGreen: '#4BCF82', // Sucesso
  demonRed: '#FF4444', // Erro
  goldChakra: '#FFD700', // Avisos
};

export const theme = createTheme({
  colors: {
    ...palette,
    // Semânticas Gerais
    primary: palette.actionRed,
    secondary: palette.mysticPurple,
    accent: palette.cyberBlue,
    black: palette.grayBlack,

    // Fundos
    background: palette.voidBlack,
    surface: palette.shadowGray,
    surfaceElevated: palette.steelGray,

    // Texto
    textPrimary: palette.ghostWhite,
    textSecondary: '#B3B3B3',
    textOnPrimary: palette.voidBlack,

    // Estados Interativos
    hoverPrimary: '#FF1F1F', // 20% mais escuro que actionRed
    pressedPrimary: '#CC0000',
    hoverSecondary: '#6A1B9A', // 20% mais escuro que mysticPurple

    // Feedback
    success: palette.soulGreen,
    error: palette.demonRed,
    warning: palette.goldChakra,
    successBg: 'rgba(75, 207, 130, 0.15)',
    errorBg: 'rgba(255, 68, 68, 0.15)',

    // Novas semânticas
    disabled: palette.disabledBackground,
    disabledContrast: palette.disabledText,
    loading: palette.loadingIndicator,
    opacity: 'rgba(0,0,0,0.5)',

    // Elementos Especiais
    gradientStart: palette.neonPink,
    gradientEnd: palette.cyberBlue,
  },
  spacing: {
    s4: 4,
    s8: 8,
    s10: 10,
    s12: 12,
    s14: 14,
    s16: 16,
    s20: 20,
    s24: 24,
    s32: 32,
    s40: 40,
    s48: 48,
    s56: 56,
  },
  borderRadii: {
    s8: 8,
    s12: 12,
    s16: 16,
  },
  textVariants: {
    defaults: {},
  },
});

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
