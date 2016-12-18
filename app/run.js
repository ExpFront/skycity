const run = ($rootScope, $state) => {
  'ngInject';

  $rootScope.$on('$stateChangeStart', (event, to) => {
    if (to.redirectTo) {
      event.preventDefault();
      $state.go(to.redirectTo);
    }
  });
};

export default run;
