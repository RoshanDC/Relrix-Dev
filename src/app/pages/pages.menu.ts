export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },

       {
        path: 'vendor',
        data: {
          menu: {
            title: 'Vendors',
            icon: 'ion-android-contacts',
            selected: false,
            expanded: false,
            order: 700,
          }
        },
        children: [
          {
            path: '',
            data: {
              menu: {
                title: 'Add Vendor',
              }
            },
            children: [
              {
                path: 'individual',
                data: {
                  menu: {
                    title: 'Individual Vendor',
                    url: '#/pages/vendor/individual'
                  }
                }
              },
              {
                path: 'mediahouse',
                data: {
                  menu: {
                    title: 'Media House',
                    url: '#/pages/vendor/mediahouse'
                  }
                }
              },
              {
                path: 'business',
                data: {
                  menu: {
                    title: 'Business',
                    url: '#'
                  }
                }
              },
              {
                path: 'others',
                data: {
                  menu: {
                    title: 'Others',
                    url: '#'
                  }
                }
              }
            ]
          }
        ]
      }
      

    ]
  }
];
