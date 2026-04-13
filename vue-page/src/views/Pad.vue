<template>
	<div class="container">
		<main>

			<div class="page__title_bx">
				<h2>PAD PLAY</h2>
				<div>
					<p>프로젝트명 : 디바이스 UI</p>
					<p>기능구현 : 패드 ON/OFF 상태, 패드 HOME 버튼 동작, 각 아이콘 별 팝오버&amp;간략 기능 구현</p>
				</div>
			</div>

			<!-- [CoinEffect] -->
			<div class="modal__popup" style="display:none">
				<!-- [노출]
				1.팝업을 노출하려면 show 클래스 추가 -->
				<div class="coin__animation ani">
					<div class="coin__animation_effect">
						<div>
							<div class="coin__animation_item">
								<div>
									<div>P</div>
								</div>
							</div>
							<div class="coin__animation_item">
								<div>
									<div>P</div>
								</div>
							</div>
							<div class="coin__animation_item">
								<div>
									<div>P</div>
								</div>
							</div>
						</div>
						<div><strong>40P</strong>가 적립되었습니다.</div>
					</div>
					<div class="conin_animation_mypoint">총 적립 포인트 : <strong><span>23,333</span> P</strong></div>
					<canvas ref="goldMoneyCanvas" width="2000" height="1000"></canvas>
				</div>
			</div>

			<div class="pad__layout" :class="{ setup: isSetup }">
				
				<div class="pad__layout_pannel">
					<div class="pad__layout_camera"><span></span></div>
					<div class="pad__layout_screen">

						<!-- [레이어팝업_레이어팝업] -->
						<div class="app_view" :class="{ open: isOpen }">
							<div class="app_view_content folder">
								<h3>폴더</h3>
								<div>
									<div>
										<h4>123123</h4>
										<div class="app_view_contenttxt">asdasd</div>
									</div>
									<button type="button" id="app_view_closebutton" @click="toggleClassToAppView">닫기</button>
								</div>
							</div>
						</div>

						<!-- [레이어팝업_지도] -->
						<div class="app_view" :class="{ open: isOpen2 }">
							<div class="app_view_content map">
								<div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.807066988949!2d127.09996271272303!3d37.51246832710791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca50a915f665b%3A0xabeb10cd5efdfce2!2z66Gv642w7JuU65Oc7YOA7JuM!5e0!3m2!1sko!2skr!4v1711696403769!5m2!1sko!2skr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
								<button type="button" id="app_view_closebutton" @click="toggleClassToAppView2">닫기</button>
							</div>
						</div>

						<!-- [레이어팝업_네이버] -->
						<div class="app_view" :class="{ open: isOpen3 }">
							<div class="app_view_content naver">
								<button type="button" id="app_view_closebutton" @click="toggleClassToAppView3">닫기</button>
							</div>
						</div>

						<ul>
							<li>
								<button type="button" id="app_open" class="popup" @click="toggleClassToAppView">
									<span></span>
									<p>폴더</p>
								</button>
							</li>
							<li>
								<button type="button" class="map" @click="toggleClassToAppView2">
									<span></span>
									<p>지도</p>
								</button>
							</li>
							<li>
								<button type="button" class="paint_board">
									<span></span>
									<p>그림판</p>
								</button>
							</li>
							<li>
								<button type="button" class="daum">
									<span></span>
									<p>찾기</p>
								</button>
							</li>
							<li>
								<button type="button" class="naver" @click="toggleClassToAppView3">
									<span></span>
									<p>NAVER</p>
								</button>
							</li>
							<li>
								<button type="button" class="calculator">
									<span></span>
									<p>계산기</p>
								</button>
							</li>
							<li>
								<button type="button" class="kakaotalk">
									<span></span>
									<p>메신저</p>
								</button>
							</li>
							<li>
								<button type="button" class="music">
									<span></span>
									<p>음악</p>
								</button>
							</li>
						</ul>
					</div>
					<div class="pad__layout_homebutton">
						<button type="button" @click="appViewCloseAll"></button>
					</div>
				</div>
<<<<<<< Updated upstream
				<h4 class="pad__layout_title"></h4>
				<button type="button" id="pad__layout_button" class="pad__button" @click="toggleSetup">{{ buttonText }}</button>
=======
				<button type="button" id="pad__layout_button" @click="toggleSetup">{{ buttonText }}</button>
>>>>>>> Stashed changes
				<div class="pad__layout_background"></div>
			</div>

			<ButtonDefault></ButtonDefault>

			<div class="details__summary_bx" style="display:none">
				<details v-for="(item, index) in detailsList" :key="index" @toggle="handleToggle">
					<summary>{{ item.summary }}</summary>
					<div>{{ item.content }}</div>
				</details>
			</div>

		</main>
		<QuickBanner></QuickBanner>
    </div>
</template>
<script>
import { ref } from 'vue';
import ButtonDefault from '@/components/item/ButtonDefault.vue';
import QuickBanner from '@/views/QuickBanner.vue';

export default {
  data() {
    return {
      isOpen: false,
      isOpen2: false,
      isOpen3: false,
      isSetup: false,
      coins: [],
      cw: 0,
      ch: 0,
      dpi: window.devicePixelRatio,
      raf: null,
      detailsList: [
        { summary: "Details 1", content: "Content of Details 1" },
        { summary: "Details 2", content: "Content of Details 2" },
        { summary: "Details 3", content: "Content of Details 3" }
      ]
    };
  },
  watch: {
    isSetup(newValue) {
      if (!newValue) {
        this.appViewCloseAll();
      }
    }
  },
  computed: {
    buttonText() {
<<<<<<< Updated upstream
      return this.isSetup ? "Pad OFF" : "Pad ON";
=======
      return this.isSetup ? "PAD OFF" : "PAD ON";
>>>>>>> Stashed changes
    }
  },
  mounted() {
    this.setupDetails();
    // 마운트 시 애니메이션 시작 시도
    this.startAnimation();
  },
  // 페이지를 나갈 때 애니메이션을 멈춰주는 것이 메모리 관리에 좋습니다.
  beforeUnmount() {
    if (this.raf) {
      window.cancelAnimationFrame(this.raf);
    }
  },
  methods: {
    toggleSetup() {
      this.isSetup = !this.isSetup;
    },
    setupDetails() {
      const details = this.$el.querySelectorAll('details');
      details.forEach(item => {
        item.addEventListener('toggle', this.handleToggle);
      });
    },
    handleToggle(event) {
      const toggled = event.target;
      if (toggled.open) {
        this.closeOtherDetails(toggled);
      }
    },
    closeOtherDetails(current) {
      const details = this.$el.querySelectorAll('details[open]');
      details.forEach(opened => {
        if (current !== opened) {
          opened.removeAttribute('open');
        }
      });
    },

    /* --- 캔버스 애니메이션 관련 방어 코드 적용 --- */

    fixDpi() {
      const canvas = this.$refs.goldMoneyCanvas;
      if (!canvas) return; // 캔버스가 없으면 실행 중단
      
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * this.dpi;
      canvas.height = rect.height * this.dpi;
    },

    setupCoins() {
      const canvas = this.$refs.goldMoneyCanvas;
      if (!canvas) return; // 캔버스가 없으면 실행 중단

      this.cw = canvas.width;
      this.ch = canvas.height;
      
      // 코인이 이미 생성되어 있다면 중복 생성 방지
      if (this.coins.length > 0) return;

      for (let i = 0; i < 20; i++) {
        this.coins.push({
          x: this.cw * 0.5,
          y: this.ch * 0.5,
          vx: (Math.random() - .5) * (this.cw / 200),
          vy: -Math.random() * (this.ch / 200),
          radius: 2.5,
          color: "#ffb007"
        });
      }
    },

    coinDraw(coin) {
      const canvas = this.$refs.goldMoneyCanvas;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      ctx.beginPath();
      ctx.arc(coin.x, coin.y, coin.radius, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fillStyle = coin.color;
      ctx.fill();
    },

    screenDraw() {
      const canvas = this.$refs.goldMoneyCanvas;
      // 캔버스가 없으면 애니메이션 프레임을 요청하지 않고 종료
      if (!canvas) {
        this.raf = null;
        return;
      }

      const ctx = canvas.getContext("2d");
      this.fixDpi();
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (this.coins.length) {
        this.coins.forEach((coin, index) => {
          if (coin.y - coin.radius > canvas.height) {
            this.coins.splice(index, 1);
          }
          this.coinDraw(coin);
          coin.x += coin.vx;
          coin.y += coin.vy;
          coin.vy *= 0.9999;
          coin.vy += this.ch / 10000;
        });
      } else {
        this.setupCoins();
      }
      this.raf = window.requestAnimationFrame(this.screenDraw);
    },

    startAnimation() {
      // 캔버스가 존재할 때만 애니메이션 로직 가동
      if (this.$refs.goldMoneyCanvas && !this.raf) {
        this.setupCoins();
        this.screenDraw();
      }
    },

    /* --- 앱 뷰 제어 관련 --- */

    toggleClassToAppView() {
      this.isOpen = !this.isOpen;
    },
    toggleClassToAppView2() {
      this.isOpen2 = !this.isOpen2;
    },
    toggleClassToAppView3() {
      this.isOpen3 = !this.isOpen3;
    },
    appViewCloseAll() {
      this.isOpen = false;
      this.isOpen2 = false;
      this.isOpen3 = false;
    }
  }
};
</script>
<style lang="scss"></style>