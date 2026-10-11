import { useState } from 'react'
import {
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Container,
  CssBaseline,
  Snackbar,
  Stack,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from '@mui/material'

const theme = createTheme({
  palette: {
    primary: { main: '#3159c7' },
    background: { default: '#f6f8fc' },
    text: { primary: '#1d2939', secondary: '#526175' },
  },
  typography: {
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    button: { textTransform: 'none', fontWeight: 600 },
  },
  shape: { borderRadius: 12 },
})

type Deck = {
  id: string
  name: string
  cardCount: number
  dueToday: number
}

const decks: Deck[] = [
  { id: 'everyday', name: '日常英会話', cardCount: 120, dueToday: 12 },
  { id: 'toeic', name: 'TOEIC 基礎単語', cardCount: 250, dueToday: 24 },
  { id: 'travel', name: '旅行で使う英語', cardCount: 80, dueToday: 0 },
  { id: 'business', name: 'ビジネス英語', cardCount: 150, dueToday: 8 },
]

function App() {
  const [notice, setNotice] = useState('')

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" color="transparent" elevation={0} sx={{ bgcolor: 'background.paper', borderBottom: 1, borderColor: 'divider' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography variant="h6" component="div" color="primary" sx={{ fontWeight: 750 }}>
              AI-nki
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ ml: 2 }}>
              英和カード学習
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>

      <Container component="main" maxWidth="lg" sx={{ py: { xs: 4, sm: 6 } }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ mb: 4, justifyContent: 'space-between', alignItems: { xs: 'stretch', sm: 'center' } }}>
          <Box>
            <Typography variant="h4" component="h1" sx={{ fontWeight: 700 }} gutterBottom>
              My Decks
            </Typography>
            <Typography color="text.secondary">
              デッキを選んで、今日の学習をはじめましょう。
            </Typography>
          </Box>
          <Button variant="contained" disableElevation size="large" onClick={() => setNotice('デッキ作成機能は準備中です。')}>
            New Deck
          </Button>
        </Stack>

        <Box component="ul" aria-label="デッキ一覧" sx={{ m: 0, p: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: { xs: 'minmax(0, 1fr)', sm: 'repeat(2, minmax(0, 1fr))', md: 'repeat(3, minmax(0, 1fr))' }, gap: 3 }}>
          {decks.map((deck) => (
            <Card component="li" variant="outlined" key={deck.id} sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ p: 3, flexGrow: 1 }}>
                <Typography variant="h6" component="h2" sx={{ fontWeight: 650, mb: 2, overflowWrap: 'anywhere' }}>
                  {deck.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  カード数：{deck.cardCount}枚
                </Typography>
                <Chip label={`本日の復習：${deck.dueToday}件`} color={deck.dueToday > 0 ? 'primary' : 'default'} variant="outlined" />
              </CardContent>
              <CardActions sx={{ px: 3, pb: 3, pt: 0 }}>
                <Button fullWidth variant="contained" disableElevation aria-label={`${deck.name}をStudy`} onClick={() => setNotice(`「${deck.name}」の学習機能は準備中です。`)}>
                  Study
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
          プレビュー：表示内容はダミーデータです。
        </Typography>
      </Container>
      <Snackbar key={notice} open={Boolean(notice)} autoHideDuration={4000} onClose={() => setNotice('')} message={notice} />
    </ThemeProvider>
  )
}

export default App
