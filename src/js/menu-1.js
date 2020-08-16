( function ( $ ) {

  var breakpoints = {
    xs: 375,
    sm: 575,
    md: 767,
    lg: 1024,
    xl: 1400
  };

  class Navigation {
    constructor( topNav ) {
      this.topNav = topNav;
      this.topNavMenu = $( '#topnav-menu' );
      this.menuItemLinks = $( '#topnav-menu .menu-item a' );
      this.menuItemTopLevel = $( '#topnav-menu > .menu-item > a' );
      this.toggleButton = $( '.menu-toggle' );
      this.subMenuToggle = $( '.sub-menu-toggle' );
      this.subMenuLinks = $( '.sub-menu-item' );
      this.menuClosed = $( window ).width() < breakpoints.lg;
      this.mobile = $( window ).width() < breakpoints.lg;
      this.hasSubMenu = $( '.menu-item.menu-item-has-children' );

      var self = this;
      if ( this.toggleButton.length > 0 ) {
        $( this.toggleButton ).click( function () {
          self.toggleButtonClick( this );
        } )
      }

      if ( this.mobile ) {
        this.mobileMenu();
      } else {
        this.desktopMenu();
      }

      if ( this.hasSubMenu.length > 0 ) {
        this.subMenuToggleInit();
      }

      if ( $( '#topnav-menu-right' ).length ) {
        $( '#topnav-menu-right' ).attr( 'aria-label', 'Nav Menu Right' );
      }

      if ( $( '#topnav-menu-left' ).length ) {
        $( '#topnav-menu-left' ).attr( 'aria-label', 'Nav Menu Left' );
      }

      this.monitorSize();

    }

    mobileMenu() {
      this.hasSubMenu.each( function () {
        $( this ).off( 'mouseover focusin mouseout focusout' );
      } )
      this.topNavMenu.attr( 'aria-hidden', 'true' );
      this.menuItemLinks.attr( 'tabIndex', -1 );
      this.topNav.removeClass( 'top-nav-open' );
      if ( this.subMenuToggle.length > 0 ) {
        this.subMenuToggle.attr( 'tabIndex', -1 );
      }
      this.menuClosed = true;
    }

    monitorSize() {
      let self = this;
      $( window ).on( 'resize', function () {
        if ( $( window ).width() < breakpoints.lg ) {
          if ( !self.mobile ) {
            self.mobileMenu();
            self.mobile = true;
          }
        } else {
          if ( self.mobile ) {
            self.mobile = false;
            self.desktopMenu();
          }
        }

      } )
    }

    desktopMenu() {
      this.topNavMenu.attr( 'aria-hidden', 'false' );
      this.menuItemTopLevel.attr( 'tabIndex', 0 );
      if ( this.subMenuToggle.length > 0 ) {
        this.subMenuToggle.attr( 'tabIndex', 0 );
        this.subMenuHoverInit();
      }
    }

    toggleButtonClick( toggle ) {
      if ( this.menuClosed ) {
        this.topNav.addClass( 'top-nav-open' );
        this.topNavMenu.attr( 'aria-hidden', false );
        $( toggle ).attr( 'aria-expanded', true );
        this.menuItemTopLevel.attr( 'tabIndex', 0 );
        this.subMenuToggle.attr( 'tabIndex', 0 );
        this.menuClosed = false;
      } else {
        this.topNav.removeClass( 'top-nav-open' );
        this.topNavMenu.attr( 'aria-hidden', true );
        $( toggle ).attr( 'aria-expanded', false );
        this.menuItemTopLevel.attr( 'tabIndex', -1 );
        this.subMenuToggle.attr( 'tabIndex', -1 );
        this.menuClosed = true;
      }
    }

    subMenuHoverInit() {
      this.hasSubMenu.each( function () {
        let trigger = this;
        let subMenu = $( this ).children( '.sub-menu' );
        subMenu.attr( 'aria-hidden', true );
        subMenu.attr( 'aria-label', 'Sub Menu' );
        subMenu.removeClass( 'sub-menu-open' );
        $( this ).attr( 'aria-expanded', false );
        let timer;

        $( this ).on( 'mouseover focusin', function () {
          subMenu.addClass( 'sub-menu-open' );
          subMenu.attr( 'aria-hidden', false );
          subMenu.find( 'a' ).attr( 'tabIndex', 0 );
          clearTimeout( timer );
          $( this ).attr( 'aria-expanded', true );
        } )
        $( this ).on( 'mouseout focusout', function () {
          timer = setTimeout( function () {
            $( trigger ).attr( 'aria-expanded', false );
            subMenu.removeClass( 'sub-menu-open' );
            subMenu.attr( 'aria-hidden', true );
            subMenu.find( 'a' ).attr( 'tabIndex', -1 );
          }, 200 );
        } )
      } )
    }

    subMenuToggleInit() {

      this.subMenuToggle.each( function () {
        let subMenu = $( this ).next( '.sub-menu' );
        let listId = $( this ).attr( 'aria-controls' );
        subMenu.attr( 'id', listId );
        subMenu.attr( 'aria-hidden', true );
        subMenu.attr( 'aria-label', 'Sub Menu' );
        $( this ).attr( 'aria-expanded', false );

        $( this ).click( function () {

          if ( $( this ).attr( 'aria-expanded' ) == 'false' ) {
            subMenu.addClass( 'sub-menu-open' );
            subMenu.attr( 'aria-hidden', false );
            $( this ).attr( 'aria-expanded', true );
            subMenu.find( 'a' ).attr( 'tabIndex', 0 );
          } else {
            $( this ).attr( 'aria-expanded', false );
            subMenu.removeClass( 'sub-menu-open' );
            subMenu.attr( 'aria-hidden', true );
            subMenu.find( 'a' ).attr( 'tabIndex', -1 );
          }
        } )

      } )

    }


  }

  let navBar = new Navigation( $( '.top-nav' ) );

  $( document ).mouseup( function ( e ) {
    var dropdown = $( '.menu-item-has-children' );
    if ( !dropdown.is( e.target ) && dropdown.has( e.target ).length == 0 ) {
      $( '.menu-item-has-children input[type="checkbox"]' ).prop( 'checked', false );
    }
  } )


} )( jQuery );