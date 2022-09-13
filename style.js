ASSET_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/'

$stage        = null
$world        = null
$terrain      = null
$team         = null
$teamListHome = null
$players      = null
$playersHome  = null # Subset of $players
$playersAway  = null # Subset of $players
$switchBtn    = null
$loadBtn      = null
$closeBtn     = null
$heading      = null
$subHeading   = null
$loading      = null
$switcher     = null

data =
    players:
        home: [
            { name: 'Pizarro', asset: 'bm-pizarro.jpg', origin: 'Peru', height: '1.84m', shirt: '14', pos: 'Forward', dob: '36', goals: 1, games: 16, x: 110, y: -190 }
            { name: 'Robben', asset: 'bm-robben.png', origin: 'Holland', height: '1.80m', shirt: '10', pos: 'Forward', dob: '32', goals: 19, games: 30, x: -110, y: -190 }
            { name: 'Rilbery', asset: 'bm-rilbery.jpg', origin: 'France', height: '1.70m', shirt: '7', pos: 'Midfield', dob: '32', goals: 9, games: 22, x: 150, y: 50 }
            { name: 'Schweinsteiger', asset: 'bm-schweinsteiger.jpg', origin: 'Germany', height: '1.87m', shirt: '24', pos: 'Forward', dob: '31', goals: 21, games: 3, x: 0, y: 100 }
            { name: 'Martinez', asset: 'bm-martinez.jpg', origin: 'Spain', height: '1.90m', shirt: '8', pos: 'Midfield', dob: '28', goals: 0, games: 2, x: -150, y: 50 }
            { name: 'Alaba', asset: 'bm-alaba.jpg', origin: 'Austria', height: '1.80m', shirt: '27', pos: 'Defence', dob: '24', goals: 5, games: 27, x: -200, y: 180 }
            { name: 'Lahm', asset: 'bm-lahm.jpg', origin: 'Germany', height: '1.70', shirt: '21', pos: 'Defence', dob: '32', goals: 2, games: 25, x: 200, y: 180 }
            { name: 'Benatia', asset: 'bm-benatia.jpg', origin: 'France', height: '1.87m', shirt: '5', pos: 'Defence', dob: '31', goals: 21, games: 1, x: 100, y: 300 }
            { name: 'Dante', asset: 'bm-dante.jpg', origin: 'Brazil', height: '1.87m', shirt: '4', pos: 'Defence', dob: '32', goals: 0, games: 34, x: -100, y: 300 }
            { name: 'Neuer', asset: 'bm-neuer.jpg', origin: 'Germany', height: '1.93m', shirt: '1', pos: 'Goalie', dob: '29', goals: 0, games: 48, x: 0, y: 410 }
        ]
        away: [
            { name: 'Benzema', asset: 'rm-benzema.jpg', origin: 'France', height: '1.87m', shirt: '9', pos: 'Forward', dob: '36', goals: 1, games: 16, x: 110, y: -190 }
            { name: 'Bale', asset: 'rm-bale.jpg', origin: 'Wales', height: '1.83m', shirt: '11', pos: 'Midfield', dob: '26', goals: 19, games: 30, x: -110, y: -190 }
            { name: 'carvajal', asset: 'rm-carvajal.jpg', origin: 'Spain', height: '1.70m', shirt: '15', pos: 'Defender', dob: '32', goals: 9, games: 22, x: 150, y: 50 }
            { name: 'Silva', asset: 'rm-silva.jpg', origin: 'Brazil', height: '1.87m', shirt: '16', pos: 'Forward', dob: '22', goals: 21, games: 3, x: 0, y: 100 }
            { name: 'Kroos', asset: 'rm-kroos.jpg', origin: 'Germany', height: '1.82', shirt: '8', pos: 'Midfield', dob: '25', goals: 0, games: 2, x: -150, y: 50 }
            { name: 'Modric', asset: 'rm-modric.jpg', origin: 'Croatia', height: '1.74m', shirt: '19', pos: 'Midfield', dob: '30', goals: 5, games: 27, x: -200, y: 180 }
            { name: 'Nacho', asset: 'rm-nacho.jpg', origin: 'Germany', height: '1.79', shirt: '18', pos: 'Defence', dob: '25', goals: 2, games: 25, x: 200, y: 180 }
            { name: 'Ramos', asset: 'rm-ramos.jpg', origin: 'Spain', height: '1.83m', shirt: '4', pos: 'Defence', dob: '31', goals: 21, games: 1, x: 100, y: 300 }
            { name: 'Pepe', asset: 'rm-pepe.jpg', origin: 'Brazil', height: '1.88m', shirt: '3', pos: 'Defence', dob: '32', goals: 0, games: 34, x: -100, y: 300 }
            { name: 'Casillas', asset: 'rm-casillas.jpg', origin: 'Spain', height: '1.85m', shirt: '1', pos: 'Goalie', dob: '34', goals: 0, games: 48, x: 0, y: 410 }
        ]

state =
    home: true
    disabHover: false
    swapSides: ->
        if @home then @home = false else @home = true
    curSide: ->
        if @home then 'home' else 'away'

pos =
    world:
        baseX: 0
        baseY: 0
        baseZ: -200
    def:
        goalie: [0,-50]

dom =
    addPlayers: (side) ->
        for key, val of data.players[side]
            val.side= side
            $el = @addPlayer val
            $team.append $el

        $players = $('.js-player')
        $playersHome = $('.js-player[data-side="home"]')
        $playersAway = $('.js-player[data-side="away"]')


    addPlayer: (data) ->
        $el = $ '<div class="js-player player" data-name="' + data.name + '" data-side="' + data.side + '" data-x="' + data.x + '" data-y="' + data.y + '"></div>'
        $el.append '<div class="player__label"><span>' + data.name + '</span></div>'
        $el.append '<div class="player__img"><img src= ' + ASSET_URL + data.asset + '></div>'
        $el.prepend '<div class="player__card"> </div>'
        $el.prepend '<div class="player__placeholder"></div>'
        @populateCard $el.find('.player__card'), data
        $el

    preloadImages: (preload) ->
        promises = []
        i = 0
        while i < preload.length
          ((url, promise) ->
            img = new Image
            img.onload = -> promise.resolve()
            img.src = url
          ) preload[i], promises[i] = $.Deferred()
          i++
        $.when.apply($, promises).done ->
            scenes.endLoading()
            scenes.loadIn(1600)


    populateCard: ($el, data) ->
        $el.append '<h3>' + data.name + '</h3>' +
            '<ul class="player__card__list"><li><span>DOB</span><br/>' + data.dob + ' yr</li><li><span>Height</span><br/>' + data.height + '</li><li><span>Origin</span><br/>' + data.origin + '</li></ul>' +
            '<ul class="player__card__list player__card__list--last"><li><span>Games</span><br/>' + data.games + '</li><li><span>Goals</span><br/>' + data.goals + '</li></ul>'

    displayNone: ($el) ->
        $el.css 'display', 'none'

events =
    attachAll: ->
        $switchBtn.on 'click', (e) ->
            e.preventDefault()
            $el = $(this)
            return if $el.hasClass 'disabled'
            scenes.switchSides()
            $switchBtn.removeClass 'disabled'
            $el.addClass 'disabled'

        $loadBtn.on 'click', (e) ->
            e.preventDefault()
            scenes.loadIn()

        $players.on 'click', (e) ->
            e.preventDefault()
            $el = $(this)
            if $('.active').length then return false
            $el.addClass 'active'
            scenes.focusPlayer($el)
            setTimeout ( -> events.attachClose()), 1

    attachClose: ->
        $stage.one 'click', (e) ->
            e.preventDefault()
            scenes.unfocusPlayer()

scenes =
    preLoad: ->
        $teamListHome.velocity { opacity: 0 }, 0
        $players.velocity { opacity: 0 }, 0
        $loadBtn.velocity { opacity: 0 }, 0
        $switcher.velocity { opacity: 0 }, 0
        $heading.velocity { opacity: 0 }, 0
        $subHeading.velocity { opacity: 0 }, 0
        $playersAway.css 'display', 'none'
        $world.velocity { opacity: 0, translateZ: -200, translateY: -60 }, 0
        $('main').velocity { opacity: 1 }, 0

    loadIn: (delay = 0) ->
        $world.velocity { opacity: 1, translateY: 0, translateZ: -200 }, { duration: 1000, delay: delay, easing: 'spring' }
        anim.fadeInDir($heading, 300, (delay + 600), 0, 30)
        anim.fadeInDir($subHeading, 300, (delay + 800), 0, 30)
        anim.fadeInDir($teamListHome, 300, (delay + 800), 0, 30)
        anim.fadeInDir($switcher, 300, (delay + 900), 0, 30)

        delay += 1200
        delayInc = 30
        anim.dropPlayers($playersHome, delay, delayInc)

    startLoading: ->
        anim.fadeInDir $loading, 300, 0, 0, -20
        images = []
        for key, val of data.players.home and data.players.away
            images.push ASSET_URL + val.asset

        dom.preloadImages(images)

    endLoading: ->
        anim.fadeOutDir $loading, 300, 1000, 0, -20

    arrangePlayers: ->
        $players.each ->
            $el = $(this)

            $el.velocity
                translateX: parseInt $el.attr('data-x')
                translateZ: parseInt $el.attr('data-y') # Z is the Y axis on the field

    focusPlayer: ($el) ->
        data = $el.data()
        shiftY = data.y

        if shiftY > 0 then shiftY = (data.y / 2)

        $('.js-player[data-side="' + state.curSide() + '"]').not('.active').each ->
            $unfocus = $(this)
            anim.fadeOutDir $unfocus, 300, 0, 0, 0, 0, null, 0.2

        $world.velocity
            translateX: (pos.world.baseX - data.x)
            translateY: (pos.world.baseY)
            translateZ: (pos.world.baseZ - shiftY) # Z is the Y axis on the field

        , 600

        $terrain.velocity
            opacity: 0.66
        , 600

        @showPlayerCard $el, 600, 600

    unfocusPlayer: ->
        $el = $('.js-player.active')
        data = $el.data()
        anim.fadeInDir $('.js-player[data-side="' + state.curSide() + '"]').not('.active'), 300, 300, 0, 0, 0, null, 0.2
        $el.removeClass 'active'
        $world.velocity
            translateX: (pos.world.baseX)
            translateY: (pos.world.baseY)
            translateZ: (pos.world.baseZ) # Z is the Y axis on the field

        , 600

        $terrain.velocity
            opacity: 1
        , 600

        @hidePlayerCard $el, 600, 600

    hidePlayerCard: ($el, dur, delay) ->
        $card = $el.find '.player__card'
        $image = $el.find '.player__img'
        $image.velocity
            translateY: 0
        , 300
        anim.fadeInDir $el.find '.player__label', 200, delay
        anim.fadeOutDir $card, 300, 0, 0, -100

    showPlayerCard: ($el, dur, delay) ->
        $card = $el.find '.player__card'
        $image = $el.find '.player__img'
        $image.velocity
            translateY: '-=150px'
        , 300
        anim.fadeOutDir $el.find '.player__label', 200, delay
        anim.fadeInDir $card, 300, 200, 0, 100

    switchSides: ->
        delay = 0
        delayInc = 20

        $old = $playersHome
        $new = $playersAway
        if !state.home
            $old = $playersAway
            $new = $playersHome

        state.swapSides()

        $old.each ->
            $el = $(this)
            anim.fadeOutDir($el, 200, delay, 0, -60, 0)
            anim.fadeOutDir($el.find('.player__label'), 200, (delay + 700))
            delay += delayInc

        $terrain.velocity { rotateY: '+=180deg' }, { delay: 150, duration: 1200 }
        anim.dropPlayers($new, 1500, 30)

anim =
    fadeInDir: ($el, dur, delay, deltaX = 0, deltaY = 0, deltaZ = 0, easing = null, opacity = 0) ->
        $el.css 'display', 'block'

        $el.velocity
            translateX: '-=' + deltaX
            translateY: '-=' + deltaY
            translateZ: '-=' + deltaZ
        , 0

        $el.velocity
            opacity: 1
            translateX: '+=' + deltaX
            translateY: '+=' + deltaY
            translateZ: '+=' + deltaZ
        ,
            easing: easing
            delay: delay
            duration: dur

    fadeOutDir: ($el, dur, delay, deltaX = 0, deltaY = 0, deltaZ = 0, easing = null, opacity = 0) ->
        if !opacity
            display = 'none'
        else
            display = 'block'

        $el.velocity
            opacity: opacity
            translateX: '+=' + deltaX
            translateY: '+=' + deltaY
            translateZ: '+=' + deltaZ
        ,
            easing: easing
            delay: delay
            duration: dur
        .velocity
            opacity: opacity
            translateX: '-=' + deltaX
            translateY: '-=' + deltaY
            translateZ: '-=' + deltaZ
        ,
            duration: 0
            display: display


    dropPlayers: ($els, delay, delayInc) ->
        $els.each ->
            $el = $(this)
            $el.css
                display : 'block'
                opacity : 0

            anim.fadeInDir($el, 800, delay, 0, 50, 0, 'spring')
            anim.fadeInDir($el.find('.player__label'), 200, (delay + 250))
            delay += delayInc

init = ->
    $stage        = $('.js-stage')
    $world        = $('.js-world')
    $switchBtn    = $('.js-switch')
    $loadBtn      = $('.js-load')
    $heading      = $('.js-heading')
    $switcher     = $('.js-switcher')
    $closeBtn     = $('.js-close')
    $subHeading   = $('.js-subheading')
    $terrain      = $('.js-terrain')
    $team         = $('.js-team')
    $teamListHome = $('.js-team-home')
    $loading      = $('.js-loading')

    dom.addPlayers('home')
    dom.addPlayers('away')
    scenes.preLoad()
    scenes.arrangePlayers()
    events.attachAll()
    scenes.startLoading()

$(document).ready ->
    init()