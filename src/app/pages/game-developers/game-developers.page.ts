import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { AvatarService } from "../../services/avatar.service";

@Component({
  selector: "app-game-developers",
  templateUrl: "./game-developers.page.html",
  styleUrls: ["./game-developers.page.scss"],
})
export class GameDevelopersPage implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  constructor(
    private router: Router,
    private avatar: AvatarService,

    @Inject(PLATFORM_ID)
    private platformId: Object
  ) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  goToRooms() {
    console.log("nav");
    this.router.navigate(["/room"]);
  }

  async openBuilder() {
    const config = this.avatar.getDefaultAvatarConfig();

    this.avatar.openAvatarBuilder(config);
  }
}
