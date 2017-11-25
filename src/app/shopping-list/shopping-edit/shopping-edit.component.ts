import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  EventEmitter,
  Output
} from "@angular/core"
import { IngredientModel } from "../../shared/ingredient.model"
import { ShoppingListService } from "../shopping-list.service"
@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput") nameInputRef: ElementRef
  @ViewChild("amountInput") amountInputRef: ElementRef
  // @Output() ingredientAdded = new EventEmitter<IngredientModel>()
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}
  onAddItem() {
    const name = this.nameInputRef.nativeElement.value
    const amount = this.amountInputRef.nativeElement.value
    const newIngredient = new IngredientModel(name, amount)
    this.shoppingListService.addIngredient(newIngredient)
    // this.ingredientAdded.emit(newIngredient)
  }
}
