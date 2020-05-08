import { BigInt } from "@graphprotocol/graph-ts";
import {
  Contract,
  Broadcast,
  Message,
  SubscribeBroadcast,
  UnsubscribeBroadcast,
} from "../generated/Contract/Contract";
import { MessageEntity } from "../generated/schema";

export function handleBroadcast(event: Broadcast): void {
  let entity = MessageEntity.load(event.transaction.from.toHex());
}

export function handleMessage(event: Message): void {}

export function handleSubscribeBroadcast(event: SubscribeBroadcast): void {}

export function handleUnsubscribeBroadcast(event: UnsubscribeBroadcast): void {}
