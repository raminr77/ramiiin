<template>
  <header @click="openModal()" class="BaseLayoutHeader">
    <img
      alt="Ramiiin"
      class="BaseLayoutHeader__profile"
      src="@/assets/images/profile-01.jpg"
    />
    <div class="BaseLayoutHeader__name">
      <h1>Ram</h1>
      <span>Online</span>
    </div>
    <div class="BaseLayoutHeader__moreBtn">
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path
          fill="#fff"
          d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
        ></path>
      </svg>
    </div>
  </header>
</template>

<script>
export default {
  name: 'BaseLayoutHeader',
  methods: {
    openModal() {}
  }
};
</script>

<style lang="scss" scoped>
.BaseLayoutHeader {
  width: 100%;
  display: flex;
  cursor: pointer;
  max-height: 62px;
  user-select: none;
  padding: 10px 16px;
  align-items: center;
  background: #111b21;
  border-bottom: 2px solid #000;
  box-shadow: 0 4px 3px rgba(0, 0, 0, 0.1);

  &__name {
    width: 100%;
    display: flex;
    color: #fff;
    flex-direction: column;
    align-items: flex-start;

    h1 {
      font-size: 18px;
      font-weight: bold;
    }
    span {
      font-size: 12px;
    }
  }
  &__profile {
    width: 40px;
    height: 40px;
    margin-right: 16px;
    border-radius: 100%;
  }
  &__moreBtn {
    width: 40px;
    height: 40px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
  }
}
</style>
