<?php
namespace Waxedphp\Slick;

class Setter extends \Waxedphp\Waxedphp\Php\Setters\AbstractSetter {

  /**
   * @var array<mixed> $setup
   */
  private array $setup = [
  ];

  /**
   * @var array<mixed> $commands
   */
  private array $commands = [
  ];
  
  /**
   * allowed options
   *
   * @var array<mixed> $_allowedOptions
   */
  protected array $_allowedOptions = [
  ];

  function setValue($value) {
    $this->setup['value'] = $value;
    return $this;
  }

  function setMode($mode) {
    $this->setup['mode'] = $mode;
    return $this;
  }

  function setTheme($theme) {
    $this->setup['theme'] = $theme;
    return $this;
  }

  /**
   * Navigates to a slide by index
   * int : slide number, boolean: dont animate
   */
  function slickGoTo(int $slideNumber, bool $dontAnimate = false) {
    $this->commands[] = [
      'cmd' => 'slickGoTo', 'n' => $slideNumber, 'a' => $dontAnimate
    ];
    return $this;
  }
	
  /**
	* Navigates to the next slide
  */
  function slickNext() {
    $this->commands[] = ['cmd' => 'slickNext'];
    return $this;
  }

  /**
	* Navigates to the previous slide
  */
  function slickPrev() {
    $this->commands[] = ['cmd' => 'slickPrev'];
    return $this;
  }
	
  /**
	* Pauses autoplay
  */
  function slickPause() {
    $this->commands[] = ['cmd' => 'slickPause'];
    return $this;
  }
	
	/**
   * 
   */
  function slickPlay() {
    $this->commands[] = ['cmd' => 'slickPlay'];
    return $this;
  }

  /**
  * value
  *
  * @param mixed $value
  * @return array<mixed>
  */
  public function value(mixed $value = ''): array {
    $a = [];
    $b = $this->getArrayOfAllowedOptions();
    if (!empty($b)) {
      $a['config'] = $b;
    }
    $a['value'] = $value;
    if (!empty($this->commands)) {
      $a['commands'] = $this->commands;
      $this->commands = [];
    };
    return $a;
  }

}
