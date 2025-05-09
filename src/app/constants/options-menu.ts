interface OptionMenu {
  label: string;
  icon: string;
  text: string;
  path: string;
  category: string;
}

export const optionsNav: OptionMenu[] = [
  {
    label: 'Dashboard',
    icon: '/vector-dashboard.png',
    text: 'logo Dashboard',
    path: '/',
    category: 'menu',
  },
  {
    label: 'Usuários',
    icon: '/vector-user.png',
    path: '/users',
    text: 'logo Usuário',
    category: 'menu',
  },
  {
    label: 'Documentos',
    icon: '/vector-document.png',
    path: '/documents',
    text: 'logo Documento',
    category: 'menu',
  },
  {
    label: 'Geral',
    icon: '/vectror-setting.png',
    path: '/settings',
    text: 'logo Configurações',
    category: 'settings',
  },
];
